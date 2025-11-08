# Landing Page Generator - KAT-Coder-Pro-V1

An advanced, modern landing page creation tool using KAT-Coder-Pro-V1 API to generate professional websites with just a few simple steps. With Neumorphism interface combined with Google Playbook, the tool provides excellent user experience.

## Key Features

- **Two-panel interface**: Sidebar and main screen with Neumorphism style
- **API Key storage**: Automatically save API key into localStorage
- **API Key management**: Show/hide, save, delete API key with status check button
- **50+ design styles**: Diverse collection of design styles from Minimalism to Cyberpunk
- **Auto prompt generation**: Star button creates random prompts when inspiration is needed
- **Style preview**: Live preview of styles before selection
- **Description prompt**: Enter detailed requirements about desired landing page
- **Landing page creation**: Call API to generate complete HTML code
- **Dynamic loading interface**: Code running animation instead of boring loading messages
- **Live preview**: Display created landing page directly on the interface
- **View modes**: Switch between preview and code display
- **File export**: Download complete HTML file

## File Structure

```
landingpage/
├── index.html          # Main page
├── styles.css          # CSS styling
├── script.js           # JavaScript functionality
└── README.md           # Documentation
```

## Installation and Usage

### 1. Installation

No installation required! Simply open the `index.html` file in your browser.

### 2. API Configuration

1. **Prepare API Key**: Ensure you have a valid KAT-Coder-Pro-V1 API key
2. **Enter API Key**: Paste your API key into the "KAT-Coder-Pro-V1 API Key" field in the sidebar

### 3. Usage

1. **API Key Management**:
   - Paste your API key into the input field
   - Click the 💾 button to save API key (automatically saved to localStorage)
   - Use the "Show/Hide" button to view or hide your API key
   - Click "Delete" to remove your saved API key
   - Green check button displays connection status

2. **Choose Style**: Select from 50+ design styles:
   - **Auto**: AI automatically selects appropriate style
   - **Minimalism**: Clean, whitespace, simple forms
   - **Material Design**: Google's design system, cards, shadows
   - **Glassmorphism**: Frosted glass, blurred backgrounds
   - **Neumorphism**: Soft embossed surfaces, subtle shadows
   - **Brutalism**: Raw, concrete textures, bold typography
   - **Cyberpunk**: Sci-fi, neon accents, futuristic
   - **And 40+ more styles**: Flat, Retro, Art Deco, etc.

3. **Generate Inspiration**: Use the star button ⭐ to create random prompts
   - Click the star button next to the description field
   - Random prompt will be automatically filled
   - You can edit the prompt after it's filled

4. **Describe Website**: Enter details about the landing page you want to create
   - Product/service description
   - Desired colors
   - Required features
   - Target audience
   - Preferred style

5. **Preview Styles**: Hover over styles to see live previews
   - Preview displays directly when selecting style
   - View detailed descriptions of each style

6. **Create Landing Page**: Click "Create Landing Page" and wait for results
   - Loading interface displays code running animation
   - Waiting time becomes more interesting

7. **View Results**:
   - **Preview**: View created landing page directly on the interface
   - **Code**: Switch to HTML code view mode
   - **Download**: Click "Download" to export HTML file

## Live Demo

View the live demo: https://novel.maitruclam.com/
Read blog of Kat: https://maitruclam.com/what-is-kat-coder/

## API Integration

Website uses Vanchin Streamlake API in the following format:

```bash
curl 'https://vanchin.streamlake.ai/api/gateway/v1/endpoints/chat/completions' \
-H "Authorization: Bearer $VC_API_KEY" \
-H 'Content-Type: application/json' \
-d '{
    "model": "ep-4v42tt-1761622771101927607",
    "messages": [
        {
            "role": "system",
            "content": "You are an AI assistant that creates beautiful landing pages..."
        },
        {
            "role": "user",
            "content": "Your prompt here"
        }
    ]
}'
```

## Interface

### Sidebar
- **API Key Management**: Input, save, show/hide, delete API key
- Style selection
- Detailed description input
- Create landing page button
- API connection status

### Main Screen
- **Welcome Screen**: Usage instructions
- **Loading Screen**: Displayed during creation
- **Preview Container**: Display landing page in preview or code mode
- **Error Container**: Display error messages

## Advanced Features

- **Responsive Design**: Interface adapts to all screen sizes
- **Real-time Validation**: Check API key immediately upon input
- **Error Handling**: Handle API errors and display clear messages
- **Code Extraction**: Automatically extract HTML code from response
- **Notification System**: Notify activity status
- **Dark Code Editor**: Display code with dark background for easy reading
- **Style Preview System**: Live preview of design styles
- **Random Prompt Generator**: Create random prompts with star button
- **Dynamic Loading Animation**: Code running effects while waiting for API
- **LocalStorage Integration**: Store API keys and user settings
- **Multi-style Support**: Support 50+ different design styles
- **Auto-style Detection**: AI automatically selects appropriate style

## System Requirements

- **Browser**: Chrome 80+, Firefox 75+, Safari 13+, Edge 80+
- **JavaScript**: JavaScript enabled
- **Internet**: Internet connection to call API

## Security

- API keys are stored temporarily in memory
- No API keys stored on servers
- All requests are HTTPS encrypted

## Support

If you encounter issues:
1. Check if your API key is valid
2. Check your internet connection
3. Check prompt format
4. Try again with a simpler prompt

## Updates

- **v1.0.0**: Initial release
  - Two-panel interface
  - 6 design styles
  - KAT-Coder-Pro-V1 API integration
  - Preview, copy, export functions

- **v1.1.0**: Major update
  - **Interface upgrade**: Redesigned with Neumorphism combined with Google Playbook
  - **Style expansion**: Increased from 6 to 50+ design styles
  - **Auto prompt generation**: Added star button for random prompts
  - **Style preview**: Live preview of styles before selection
  - **Loading animation**: Code running effects instead of boring messages
  - **UI/UX improvement**: Status check button, modern design, better responsiveness
  - **Performance optimization**: Faster loading, better error handling
  - **Documentation update**: Complete README, detailed instructions

## Contact

If you have any questions or suggestions, please create an issue on the repository or contact directly.

---

**Note**: This tool requires a valid KAT-Coder-Pro-V1 API key to function. Please ensure you have API access before using.
