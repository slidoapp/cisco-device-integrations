# Displaying Slido Polls and Vidcast Videos on Cisco Devices via Digital Signage

This guide provides step-by-step instructions to display a Slido poll or a Vidcast video (or playlist) on your Cisco device in half-wake mode using the digital signage feature.

![Slido for Cisco Devices](./assets/digital-signage.png)

---

## Step 1: Prepare Your Slido Poll or Vidcast Video

### Displaying a Slido Poll

1. **Sign Up and Log In**:

   - Visit [Slido](https://www.sli.do/) and sign up or log in to your account.

2. **Create a slido**:

   - Click on **Create slido** and fill in the necessary details.

3. **Create an Interaction**:

   - Within your slido add an interaction, such as a Word Cloud.
   - Set up your interaction and click **Start interaction** to make it active.

4. **Access Present Mode**:

   - In the top right corner, click **Present** to open the Present mode in a new tab.

5. **Copy the Present Mode Link**:

   - Once the Present mode is open, copy the URL from your browser's address bar.

**Tip**: If your Cisco device is not a touchscreen and cannot interact with the Slido poll, ensure that the poll does not require participant input or remove any authentication requirements to allow passive viewing.

---

### Displaying a Vidcast Video or Playlist

1. **Sign Up and Log In to Vidcast**:

   - Visit [Vidcast](https://www.vidcast.io/) and sign up or log in to your account.

2. **Upload or Select a Video**:

   - Upload a new video or select an existing one from your library.

3. **Access the Embed Options**:

   - Open the video and click **Share** in the top right corner.
   - Select **Embed** to access embedding options.

4. **Configure Embed Settings**:

   - Enable **Autoplay** and **Closed Captions** as desired.

5. **Copy the Embed Link**:

   - Click **Copy Embed Link** to copy the URL with your configured settings.
   - To have the video play in a continuous loop, append `&loop=1` to the end of the embed URL.

**Pro Tip**: The same embedding and looping settings apply to Vidcast playlists. This allows you to display multiple videos in sequence, playing continuously.

---

## Step 2: Add the Link to Digital Signage on Cisco Devices

### Method 1: Using Webex Control Hub

1. **Access Control Hub**:

   - Navigate to [https://admin.webex.com](https://admin.webex.com) and sign in with your administrator credentials.

2. **Select Your Device**:

   - Go to the **Devices** section.
   - Choose the device(s) you wish to configure from the list.

3. **Configure Digital Signage**:

   - Find **Configurations** and then select **Digital Signage**.
   - Toggle **Enable Digital Signage** to **On**.
   - Paste the copied Slido Present mode link or Vidcast embed link into the URL field.
   - If your device supports interactivity (e.g., Board and Desk Series), enable the **Interactivity** option.
   - Click **Save** to apply the settings.

---

### Method 2: Using the Device's Web Interface

1. **Obtain the Device's IP Address**:

   - On the device, tap the system name to access **Settings**.
   - Navigate to **About this device** to find the IP address.

2. **Access the Web Interface**:

   - Open a web browser and enter the device's IP address in the address bar.
   - If prompted, log in. For devices registered to Webex, you might need to create a local user account via the Control Hub to access the web interface.

3. **Configure Digital Signage**:

   - Once logged in, navigate to the **Settings** and then **Configurations** section.
   - Locate the **Standby** settings.
   - Locate the **Signage** section.
   - Enable digital signage (by setting **Mode** as **on**) and paste the copied Slido Present mode link or Vidcast embed link into the URL field.
   - Save your changes to apply the new configuration.

---

By following these steps, you can effectively display interactive Slido polls or engaging Vidcast videos on your Cisco devices using the digital signage feature.

---

For a visual walkthrough, you might find this video helpful: [Configure Digital Signage on Cisco Webex Devices]\([https://www.youtube.com/watch?v=988W5W6T3bY](https://www.youtube.com/watch?v=988W5W6T3bY))
