/********************************************************
 * Slido Auto Feedback Macro
 *
 * Author:       Peter Hraska
 *               Technical Leader
 *               hraska@cisco.com
 *
 * Version:      1.0.0
 * Released:     6th of December 2024
 *
 * Description:
 * This macro is designed for Cisco devices to enhance meeting
 * feedback collection. After each meeting ends, it automatically
 * opens a WebView displaying a feedback survey (configured via URL).
 * Users are prompted 45 seconds later that the WebView will close in
 * 15 seconds unless they take an action. They can cancel the auto-close
 * or close it immediately using the provided options.
 *
 * Instructions:
 * 1. Copy the macro into your Cisco device macro editor.
 * 2. Update the `slidoFeedbackUrl` in the Config section below to
 *    your desired Slido feedback URL.
 * 3. Save and activate the macro.
 * 4. Ensure WebView features are enabled on the device.
 *
 * Optionally, you an also trigger the feedback with a UI button.
 * This requires you to create an UI Extensions button with
 * id = 'feedback'.
 *
 * Full Readme and Source:
 * https://github.com/slidoapp/cisco-device-integrations
 ********************************************************/

import xapi from 'xapi';

/********************************************************
 * Config Section: Update these values as needed
 ********************************************************/
const config = {
  slidoFeedbackUrl: 'https://app.sli.do/event/ufeNAaoyqxtshg2iRVud4S/embed/polls/507a0a49-a0d8-4b72-bef7-313f88f04e6f', // Go to slido.com, create your Slido poll within an event and copy the direct link here
  alertTimeout: 45, // Time in seconds after opening the WebView to show the alert
  autoCloseTimeout: 15, // Time in seconds after showing the alert to auto-close the WebView
  alertPrompt: {
    Duration: 15,
    Title: 'Auto Close',
    Text: `Survey will auto-close in 15 seconds unless canceled.`,
    'Option.1': 'Cancel Auto Close',
    'Option.2': 'Close now',
    FeedbackId: 'webviewAutoclose'
  },
  autoStandby: false,
};

/********************************************************
 * Do Not Touch Below: Macro Logic
 ********************************************************/

let autoCloseTimer = null;
let alertTimer = null;

xapi.Event.UserInterface.Extensions.Panel.Clicked.on(panelClicked)
xapi.Event.CallDisconnect.on(callDisconnect);

// Opens the WebView after clearing storage and waiting
function openSlidoFeedback(autoClose = true) {
  console.log('Clearing WebEngine storage and opening Slido feedback');
  xapi.Command.WebEngine.DeleteStorage({ Type: 'WebApps' });

  setTimeout(() => {
    xapi.Command.UserInterface.WebView.Display({ Url: config.slidoFeedbackUrl + '?lightness=dark', Target: 'Controller' });
    if (autoClose) startTimers();
  }, 500);
}

// Displays the auto-close alert prompt
function displayPrompt() {
  console.log('Displaying Auto Close Prompt');
  xapi.Command.UserInterface.Message.Prompt.Display(config.alertPrompt);

  // Start the auto-close timer when the prompt is displayed
  autoCloseTimer = setTimeout(closeWebView, config.autoCloseTimeout * 1000);
}

// Handles user feedback from the prompt
xapi.Event.UserInterface.Message.Prompt.Response.on((event) => {
  if (event.FeedbackId !== config.alertPrompt.FeedbackId) return;
  if (!event.hasOwnProperty('OptionId')) return;

  if (event.OptionId === '1') {
    console.log('User canceled auto close');
    stopTimers();
  } else if (event.OptionId === '2') {
    console.log('User chose to close immediately');
    closeWebView();
  }
});

// Closes the WebView
async function closeWebView() {
  console.log('Closing WebView and clearing prompt');
  clearTimers();

  // Close prompt
  xapi.Command.UserInterface.Message.Prompt.Clear({ FeedbackId: config.alertPrompt.FeedbackId });

  // Perform room cleanup
  xapi.Command.UserInterface.Extensions.Panel.Close();
  xapi.Command.Presentation.Stop();
  xapi.Command.RoomCleanup.Run({ ContentType: ['WebData'] });

  if(config.autoStandby) enterStandby();
}

function enterStandby() {
  console.log('Entering Standby');
  xapi.Command.Standby.Activate();
}

// Starts the alert and auto-close timers
function startTimers() {
  console.log('Starting Timers');
  alertTimer = setTimeout(displayPrompt, config.alertTimeout * 1000);
}

// Stops both alert and auto-close timers
function stopTimers() {
  console.log('Stopping Timers');
  clearTimers();
}

// Clears the alert and auto-close timers
function clearTimers() {
  if (alertTimer !== null) {
    clearTimeout(alertTimer);
    alertTimer = null;
  }
  if (autoCloseTimer !== null) {
    clearTimeout(autoCloseTimer);
    autoCloseTimer = null;
  }
}

// Event listener for call disconnect
function callDisconnect(event) {
  console.log('Call disconnected: ' + event.RemoteURI);
  console.log('Opening Slido');
  openSlidoFeedback();
}

// Event listener for button clicks
function panelClicked(event) {
  console.log('Panel clicked:');
  console.log(event);

  if (event && event.PanelId === 'feedback') {
    openSlidoFeedback(false);
  }
}

// Subscribe to call disconnect events
xapi.Status.Call.on((calls) => {
  if (calls.length === 0) {
    callDisconnect({ RemoteURI: 'Unknown' });
  }
});
