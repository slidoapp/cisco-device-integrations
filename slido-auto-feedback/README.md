# Slido Auto Feedback Macro for Cisco Devices

Enhance your meetings with quick and seamless feedback collection! This Cisco device macro opens a WebView with a survey immediately after a call ends, and automates its closure with a user-friendly timer. Perfect for gathering room feedback or other quick insights from participants.

![Slido for Cisco Devices](./assets/slido-for-devices.jpg)

---

## 🌟 Overview

This macro:
- **Opens a WebView** with a pre-configured URL (e.g., a Slido survey) after a call ends.
- **Displays a closing alert** 45 seconds later, giving users 15 seconds to act.
- **Allows users to cancel auto-close** or close the WebView immediately.
- **Automatically closes** the WebView if no action is taken.
- **Optional Button Trigger**: Add a custom button to manually open the feedback survey at any time.

---

## 🚀 Setup

Follow these steps to get started:

### 1. **Copy the Macro:**
   Copy the [macro code](./slido-auto-feedback-macro.js) into your Cisco device's Macro Editor.

### 2. **Set Up Your Feedback Survey:**

To use Slido for collecting feedback:

1. **Go to [slido.com](https://slido.com):**
   - Sign in or sign up for an account.

2. **Create Your Slido Survey:**
   - Create a new Slido.
   - Add a **poll** or **survey** with your preferred questions. For example:
     - *"How did you feel about the meeting room experience?"* with emoji responses.
     - Or *"Rate the audio/video quality of this meeting."*

3. **Get the Survey Link:**
   - Click the **three dots** (`...`) next to your poll/survey.
   - Select **Direct link** to get the direct voting URL.

4. **Decide How to Organize Feedback:**
   - Use **one survey** for all devices to consolidate feedback.
   - Or create **separate surveys** for each device for granular insights.

5. **Update the Macro:**
   - Replace the `slidoFeedbackUrl` in the **Config Section** with your copied Slido link.

### 3. **Enable the WebView Feature:**
   - Go to your device's **web interface**.
   - Navigate to `Settings > Features > Web Engine`.
   - Set it to **Enable**.

### 4. **Activate the Macro:**
   Save and activate the macro in the editor.

### 5. **Optional: Add a Feedback Button (Manual Trigger)**

To allow users to open the feedback survey manually via a button:

1. **Go to the Control Hub:**
   - Navigate to `Devices → Local Device Controls → UI Extensions Editor`.

2. **Add a New Action Button:**
   - Create a new button with the following settings:
     - **Name:** `Send room feedback`
     - **ID:** `feedback`
     - **Button location:** `Home screen`

3. **Customize the Button Icon (Optional):**
   - Use the custom button icon provided in this repository at [`assets/slido-feedback-icon.png`](./assets/slido-feedback-icon.png).

4. Save your changes, and the button will now appear on the Home screen to manually open the WebView.

---

## 📜 License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

---

## 🤝 Contact

**Peter Hraska**
Technical Leader, Cisco
📧 hraska@cisco.com

Enjoy effortless feedback collection! 🎉
