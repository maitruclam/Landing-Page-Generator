// DOM Elements
const sidebar = document.getElementById('sidebar');
const apiKeyInput = document.getElementById('apiKey');
const styleSelect = document.getElementById('style');
const promptTextarea = document.getElementById('prompt');
const generateBtn = document.getElementById('generateBtn');
const apiStatusIndicator = document.getElementById('apiStatusIndicator');
const welcomeScreen = document.getElementById('welcomeScreen');
const loadingScreen = document.getElementById('loadingScreen');
const previewContainer = document.getElementById('previewContainer');
const errorContainer = document.getElementById('errorContainer');
const generatedCode = document.getElementById('generatedCode');
const errorMessage = document.getElementById('errorMessage');
const previewFrame = document.getElementById('previewFrame');
const previewInner = document.querySelector('.preview-inner');
const codeDisplay = document.getElementById('codeDisplay');
const previewContent = document.querySelector('.preview-content');
const notification = document.getElementById('notification');
const retryBtn = document.getElementById('retryBtn');

// New elements for API key management
const saveApiKeyBtn = document.getElementById('saveApiKeyBtn');
const showApiKeyBtn = document.getElementById('showApiKeyBtn');
const clearApiKeyBtn = document.getElementById('clearApiKeyBtn');
const previewModeBtn = document.getElementById('previewModeBtn');
const codeModeBtn = document.getElementById('codeModeBtn');
const exportBtnFinal = document.getElementById('exportBtnFinal');
const guideBtn = document.getElementById('guideBtn');

// Style preview elements
const stylePreviewContainer = document.getElementById('stylePreviewContainer');
const stylePreviewContent = document.getElementById('stylePreviewContent');

// Random prompt button
const randomPromptBtn = document.getElementById('randomPromptBtn');

// Loading screen elements
const codeLines = document.getElementById('codeLines');
let loadingAnimationInterval = null;
let currentLineNumber = 1;

// Dark background styles (for text contrast)
const darkStyles = [
    'cyberpunk', 'brutalism', 'terminal-retro-computer', 'neon-noir',
    'synthwave-outrun', 'grunge', 'gothic-revival', 'pixel-8bit',
    'ecobrutalism', 'tech-minimal', 'retro-futurism'
];

// Style descriptions for preview
const styleDescriptions = {
    "auto": "AI automatically detects and applies the appropriate style based on your description - Can combine multiple styles",
    "minimalism": "Whitespace & restraint - Simple forms, essential elements only",
    "material-design": "The Google playbook - Cards, shadows, motion design system",
    "flat-design": "No depth, all color - Bold colors, simple icons, clean typography",
    "long-shadow": "Flat 2.0 - Flat design + long shadow depth for modern look",
    "glassmorphism": "Frosted glass vibes - Blurred backgrounds, transparency, vibrant accents",
    "neumorphism": "Soft embossed surfaces - Subtle shadows, pastel colors, gentle curves",
    "brutalism": "Raw, loud, bold - Concrete textures, bold typography, exposed structure",
    "neo-brutalism": "Flat blocks, thick borders, harsh contrast - Modern brutalist aesthetic",
    "bento-ui": "Modular cards, rounded corners - Grid-based card layout system",
    "gradient-mesh": "Soft fluid gradients, dreamy vibes - Aurora-like smooth color transitions",
    "corporate-memphis": "Friendly flat illustrations, big tech vibe - Alegria style, approachable design",
    "motion-ui": "Animated depth & micro-interaction focus - Dynamic interactions and transitions",
    
    "skeuomorphism": "Textures that feel too real - Realistic textures, 3D effects, mimics real objects",
    "claymorphism": "Toy-like & bubbly - Soft shadows, playful rounded shapes",
    "cyberpunk": "Sci-fi darkness - Neon accents, futuristic dystopian aesthetic",
    "retro-vaporwave": "Neon, gradients, 90s energy - Pink & cyan vibes, nostalgic feel",
    "y2k": "Chrome, lens flares, 2000s nostalgia - Metallic effects, millennium aesthetic",
    "synthwave-outrun": "Purple-orange sunset, 80s grid aesthetic - Retro-futuristic style",
    "neon-noir": "Dark base, wet neon accents - Cyberpunk film noir atmosphere",
    
    "swiss-international": "Grid-based, sans-serif, clear hierarchy - Functional Swiss design",
    "bauhaus": "Geometric, functional, primary colors - Minimalist modernist principles",
    "digital-bauhaus": "Updated geometric minimalism - Modern take on Bauhaus principles",
    "memphis": "Playful patterns, 80s aesthetic - Bold colors, geometric shapes",
    "art-deco": "Geometric elegance, symmetry, metallics - Luxurious vintage style",
    "constructivism": "Strong diagonals, vintage poster energy - Revolutionary Russian art",
    
    "scandinavian-nordic": "Calm, natural light, simple elegance - Clean minimalist warmth",
    "organic-minimal": "Natural tones + clean composition - Earthy minimal aesthetic",
    "tech-minimal": "Precision grid, subtle gradients, futuristic calm - High-tech minimalism",
    "cupertino-minimal": "Soft shadows, clean white space - iOS-inspired clean design",
    
    "maximalism": "Loud, layered, decorative excess - More is more philosophy",
    "anti-design": "Chaotic, rule-breaking layouts - Deliberately unconventional",
    "postmodern-eclectic": "Mix-and-match eras, playful disorder - Eclectic combination",
    "psychedelic": "Vibrant swirls, distorted reality - Trippy colors and patterns",
    "grunge": "Rough textures, distressed feel - Dark edgy aesthetic",
    "kawaii-pastel-pop": "Cute faces, rounded shapes, candy colors - Adorable Japanese style",
    "hand-drawn-naive": "Sketchy, imperfect, human feel - Artistic hand-crafted look",
    
    "isometric": "3D perspective at 30°, technical precision - Geometric 3D illustration",
    "pixel-8bit": "Retro game look, visible pixels - 8-bit vintage gaming aesthetic",
    "wireframe-outline": "Line-based, skeleton structure - Minimal outline design",
    "paper-cut-collage": "Layered paper look, soft shadows - Craft-inspired aesthetic",
    "risograph-print": "Ink texture, color misalignment - Vintage print aesthetic",
    
    "organic-biomorphic": "Smooth curves, natural flow, blob shapes - Nature-inspired forms",
    "ecobrutalism": "Brutalist geometry + nature textures - Raw natural combination",
    
    "fluent": "Acrylic blur, responsive lighting - Microsoft's modern design system",
    "terminal-retro-computer": "Monospace text, CRT green/black look - Vintage computer terminal",
    
    "editorial-magazine": "Bold typography, photo-heavy layouts - Print-inspired editorial design",
    "experimental-typography": "Layouts led by expressive lettering - Artistic typography focus",
    "monochrome-duotone": "One or two strong contrasting colors - High contrast minimal palette",
    
    "retro-futurism": "Optimistic space-age vibe - Nostalgic vision of the future",
    "gothic-revival": "Dark, ornate typography & frames - Mysterious gothic aesthetic"
};

// Style mappings for API - Updated with 50 design styles
const styleMappings = {
    // Auto mode - let AI decide
    "auto": "",
    
    // Original styles
    modern: "hiện đại, trẻ trung, màu sắc tươi sáng, phong cách hiện đại",
    minimalist: "tối giản, sạch sẽ, khoảng trống rộng, phong cách tối giản",
    corporate: "chuyên nghiệp, doanh nghiệp, màu xanh dương/đen, phong cách doanh nghiệp",
    creative: "sáng tạo, nghệ thuật, màu sắc độc đáo, phong cách sáng tạo",
    tech: "công nghệ, futuristic, màu xanh neon, phong cách công nghệ cao",
    elegant: "thanh lịch, sang trọng, màu pastel, phong cách thanh lịch",
    
    // New 50 design styles
    "neumorphism": "Neumorphism - soft embossed surfaces, subtle shadows, pastel colors, gentle curves",
    "glassmorphism": "Glassmorphism - frosted glass effect, blurred backgrounds, transparency, vibrant accents",
    "skeuomorphism": "Skeuomorphism - realistic textures, 3D effects, mimics real-world objects",
    "flat-design": "Flat design - no depth, bold colors, simple icons, clean typography",
    "material-design": "Material Design - Google's design system, cards, shadows, motion",
    "brutalism": "Brutalism - raw concrete textures, bold typography, exposed structure",
    "minimalism": "Minimalism - whitespace, restraint, simple forms, essential elements only",
    "retro-vaporwave": "Retro/Vaporwave - neon colors, gradients, 90s aesthetic, cyberpunk vibes",
    "cyberpunk": "Cyberpunk - sci-fi darkness, neon accents, futuristic dystopian",
    "claymorphism": "Claymorphism - toy-like, bubbly shapes, soft shadows, playful",
    "swiss-international": "Swiss/International - grid-based, sans-serif, clear hierarchy, functional",
    "bauhaus": "Bauhaus - geometric, functional, primary colors, minimalist",
    "memphis": "Memphis - playful patterns, 80s aesthetic, bold colors, geometric shapes",
    "y2k": "Y2K - chrome effects, lens flares, 2000s nostalgia, futuristic",
    "corporate-memphis": "Corporate Memphis - friendly flat illustrations, big tech vibe, approachable",
    "neo-brutalism": "Neo-brutalism - flat blocks, thick borders, harsh contrast, modern",
    "anti-design": "Anti-design - chaotic, rule-breaking, unconventional layouts",
    "maximalism": "Maximalism - loud, layered, decorative excess, rich visuals",
    "grunge": "Grunge - rough textures, distressed feel, dark colors, edgy",
    "kawaii-pastel-pop": "Kawaii/Pastel Pop - cute faces, rounded shapes, candy colors, playful",
    "isometric": "Isometric - 3D perspective at 30°, technical precision, geometric",
    "pixel-8bit": "Pixel/8-bit - retro game look, visible pixels, 8-bit aesthetic",
    "monochrome-duotone": "Monochrome/Duotone - one or two contrasting colors, high contrast",
    "gradient-mesh": "Gradient Mesh/Aurora - soft fluid gradients, dreamy vibes, smooth transitions",
    "wireframe-outline": "Wireframe/Outline - line-based, skeleton structure, minimal",
    "paper-cut-collage": "Paper-cut/Collage - layered paper look, soft shadows, craft-like",
    "editorial-magazine": "Editorial/Magazine - bold typography, photo-heavy, print-inspired",
    "art-deco": "Art Deco - geometric elegance, symmetry, metallics, luxurious",
    "constructivism": "Constructivism - strong diagonals, vintage poster energy, bold",
    "scandinavian-nordic": "Scandinavian/Nordic Minimal - calm, natural light, simple elegance",
    "organic-biomorphic": "Organic/Biomorphic - smooth curves, natural flow, blob shapes",
    "bento-ui": "Bento UI - modular cards, rounded corners, grid layout",
    "terminal-retro-computer": "Terminal/Retro-computer - monospace text, CRT green/black, vintage",
    "fluent": "Fluent (Microsoft) - acrylic blur, responsive lighting, modern",
    "cupertino-minimal": "Cupertino minimal - soft shadows, clean white space, iOS-like",
    "neon-noir": "Neon noir - dark base, wet neon accents, cyberpunk film",
    "synthwave-outrun": "Synthwave/Outrun - purple-orange sunset, 80s grid, retro-futuristic",
    "risograph-print": "Risograph/Print rough - ink texture, color misalignment, print-like",
    "long-shadow": "Long-shadow/Flat 2.0 - flat design + long shadow depth, modern",
    "retro-futurism": "Retro-futurism - optimistic space-age, nostalgic future",
    "hand-drawn-naive": "Hand-drawn/Naive - sketchy, imperfect, human feel, artistic",
    "organic-minimal": "Organic minimal - natural tones + clean composition, earthy",
    "digital-bauhaus": "Digital Bauhaus - updated geometric minimalism, modern take",
    "postmodern-eclectic": "Postmodern eclectic - mix-and-match eras, playful disorder",
    "ecobrutalism": "Ecobrutalism - brutalist geometry + nature textures, raw natural",
    "psychedelic": "Psychedelic - vibrant swirls, distorted reality, trippy colors",
    "tech-minimal": "Tech minimal - precision grid, subtle gradients, futuristic calm",
    "gothic-revival": "Gothic revival - dark, ornate typography & frames, mysterious",
    "motion-ui": "Motion UI - animated depth & micro-interaction focus, dynamic",
    "experimental-typography": "Experimental typography - layouts led by expressive lettering, artistic"
};

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    initEventListeners();
    loadApiKey();
    // Show preview for the initially selected style
    updateStylePreview();
});

function initEventListeners() {
    // API key input
    apiKeyInput.addEventListener('input', checkApiKey);
    
    // API key management buttons
    saveApiKeyBtn.addEventListener('click', saveApiKey);
    showApiKeyBtn.addEventListener('click', toggleApiKeyVisibility);
    clearApiKeyBtn.addEventListener('click', clearApiKey);
    
    // Style selection - Add event listener for preview
    styleSelect.addEventListener('change', updateStylePreview);
    
    // Random prompt button
    randomPromptBtn.addEventListener('click', generateRandomPrompt);
    
    // Generate button
    generateBtn.addEventListener('click', generateLandingPage);
    
    // Preview mode buttons
    previewModeBtn.addEventListener('click', switchToPreviewMode);
    codeModeBtn.addEventListener('click', switchToCodeMode);
    
    // Export button
    exportBtnFinal.addEventListener('click', exportLandingPage);
    
    // Retry
    retryBtn.addEventListener('click', retry);
    
    // Guide button
    guideBtn.addEventListener('click', showGuide);
    
    // Close notification when clicking outside
    document.addEventListener('click', function(e) {
        if (!notification.contains(e.target)) {
            hideNotification();
        }
    });
}

// Handlers

function checkApiKey() {
    const apiKey = apiKeyInput.value.trim();
    if (apiKey) {
        // Show API status indicator
        if (apiStatusIndicator) {
            apiStatusIndicator.style.display = 'flex';
        }
        generateBtn.disabled = false;
        saveApiKeyBtn.disabled = false;
    } else {
        // Hide API status indicator
        if (apiStatusIndicator) {
            apiStatusIndicator.style.display = 'none';
        }
        generateBtn.disabled = true;
        saveApiKeyBtn.disabled = true;
    }
}

function loadApiKey() {
    const savedApiKey = localStorage.getItem('katCoderApiKey');
    if (savedApiKey) {
        apiKeyInput.value = savedApiKey;
        checkApiKey();
        showNotification('Loaded saved API key', 'info');
    }
}

function saveApiKey() {
    const apiKey = apiKeyInput.value.trim();
    if (apiKey) {
        localStorage.setItem('katCoderApiKey', apiKey);
        showNotification('API key saved', 'success');
    }
}

function toggleApiKeyVisibility() {
    const currentType = apiKeyInput.getAttribute('type');
    if (currentType === 'password') {
        apiKeyInput.setAttribute('type', 'text');
        showApiKeyBtn.innerHTML = '<i class="fas fa-eye-slash"></i> Hide';
    } else {
        apiKeyInput.setAttribute('type', 'password');
        showApiKeyBtn.innerHTML = '<i class="fas fa-eye"></i> Hiển thị';
    }
}

function clearApiKey() {
    apiKeyInput.value = '';
    localStorage.removeItem('katCoderApiKey');
    checkApiKey();
        showNotification('API key cleared', 'info');
}

async function generateLandingPage() {
    const apiKey = apiKeyInput.value.trim();
    const style = styleSelect.value;
    const prompt = promptTextarea.value.trim();
    
    if (!apiKey) {
        showNotification('Please enter API key', 'error');
        return;
    }
    
    if (!prompt) {
        showNotification('Please enter website description', 'error');
        return;
    }
    
    try {
        // Show loading
        showLoading();
        
        // Prepare the prompt with style
        let enhancedPrompt;
        
        if (style === 'auto') {
            // Auto mode: Let AI decide the style based on the prompt
            enhancedPrompt = `${prompt}\n\nHãy tự động nhận diện và áp dụng phong cách thiết kế phù hợp nhất với mô tả trên. Bạn có thể kết hợp nhiều phong cách thiết kế khác nhau nếu cần thiết để tạo ra kết quả tốt nhất.\n\nTạo một landing page HTML hoàn chỉnh, responsive, bao gồm CSS và JavaScript (nếu cần). Chỉ trả về code HTML, không có giải thích hay text nào khác. Sử dụng các công nghệ hiện đại như Flexbox, Grid, CSS Variables. Đảm bảo landing page đẹp, chuyên nghiệp và phù hợp với mô tả.`;
        } else {
            // Specific style mode
            const styleDescription = styleMappings[style];
            enhancedPrompt = `${prompt}\n\nPhong cách thiết kế: ${styleDescription}\n\nHãy tạo một landing page HTML hoàn chỉnh, responsive, bao gồm CSS và JavaScript (nếu cần). Chỉ trả về code HTML, không có giải thích hay text nào khác. Sử dụng các công nghệ hiện đại như Flexbox, Grid, CSS Variables. Đảm bảo landing page đẹp, chuyên nghiệp và phù hợp với mô tả.`;
        }
        
        // Call API
        const response = await callVanchinAPI(apiKey, enhancedPrompt);
        
        if (response.success) {
            showPreview(response.code);
        showNotification('Landing page created successfully!', 'success');
        } else {
            showError(response.error);
        showNotification('Landing page creation failed', 'error');
        }
    } catch (error) {
        console.error('Error:', error);
        showError('An error occurred while calling the API. Please check your API key and try again.');
        showNotification('An error occurred', 'error');
    }
}

function switchToPreviewMode() {
    previewModeBtn.classList.add('active');
    codeModeBtn.classList.remove('active');
    previewFrame.style.display = 'flex';
    codeDisplay.style.display = 'none';
    previewContent.classList.remove('code-mode');
}

function switchToCodeMode() {
    codeModeBtn.classList.add('active');
    previewModeBtn.classList.remove('active');
    previewFrame.style.display = 'flex';
    codeDisplay.style.display = 'flex';
    previewContent.classList.add('code-mode');
}

async function callVanchinAPI(apiKey, prompt) {
    try {
        const response = await fetch('https://vanchin.streamlake.ai/api/gateway/v1/endpoints/chat/completions', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "model": "ep-4v42tt-1761622771101927607",
                "messages": [
                    {
                        "role": "system",
                        "content": "You are an AI assistant that creates beautiful landing pages. Always return complete HTML code with embedded CSS and JavaScript. Make sure the code is production-ready and responsive."
                    },
                    {
                        "role": "user",
                        "content": prompt
                    }
                ]
            })
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        if (data.choices && data.choices.length > 0) {
            const content = data.choices[0].message.content;
            // Extract HTML code if wrapped in markdown
            const htmlCode = extractHTMLCode(content);
            return { success: true, code: htmlCode };
        } else {
            throw new Error('Invalid response format');
        }
    } catch (error) {
        return { success: false, error: error.message };
    }
}

function extractHTMLCode(content) {
    // Check for code blocks
    const codeBlockMatch = content.match(/```(?:html)?\s*([\s\S]*?)```/);
    if (codeBlockMatch) {
        return codeBlockMatch[1].trim();
    }
    
    // Check for HTML tags
    const htmlMatch = content.match(/<!DOCTYPE html>[\s\S]*/);
    if (htmlMatch) {
        return htmlMatch[0];
    }
    
    // If no clear HTML found, return the content as is
    return content.trim();
}

function showLoading() {
    welcomeScreen.style.display = 'none';
    previewContainer.style.display = 'none';
    errorContainer.style.display = 'none';
    loadingScreen.style.display = 'flex';
    generateBtn.disabled = true;
    
    // Reset and start code animation
    startCodeAnimation();
}

// Code lines for loading animation
const loadingCodeLines = [
    { type: 'comment', text: '// Initializing AI generator...' },
    { type: 'keyword', text: 'const' },
    { type: 'variable', text: ' generator' },
    { type: 'operator', text: ' = ' },
    { type: 'function', text: 'new' },
    { type: 'variable', text: ' LandingPageGenerator' },
    { type: 'operator', text: '();' },
    { type: 'empty', text: '' },
    { type: 'comment', text: '// Analyzing user prompt...' },
    { type: 'variable', text: 'const' },
    { type: 'variable', text: ' prompt' },
    { type: 'operator', text: ' = ' },
    { type: 'string', text: '"' },
    { type: 'string', text: 'Analyzing design requirements...' },
    { type: 'string', text: '"' },
    { type: 'operator', text: ';' },
    { type: 'empty', text: '' },
    { type: 'comment', text: '// Detecting design style...' },
    { type: 'variable', text: 'const' },
    { type: 'variable', text: ' style' },
    { type: 'operator', text: ' = ' },
    { type: 'function', text: 'detectStyle' },
    { type: 'operator', text: '(' },
    { type: 'variable', text: 'prompt' },
    { type: 'operator', text: ');' },
    { type: 'empty', text: '' },
    { type: 'comment', text: '// Generating HTML structure...' },
    { type: 'variable', text: 'const' },
    { type: 'variable', text: ' html' },
    { type: 'operator', text: ' = ' },
    { type: 'function', text: 'generateHTML' },
    { type: 'operator', text: '({' },
    { type: 'empty', text: '' },
    { type: 'variable', text: '    style' },
    { type: 'operator', text: ': ' },
    { type: 'variable', text: 'style' },
    { type: 'operator', text: ',' },
    { type: 'empty', text: '' },
    { type: 'variable', text: '    content' },
    { type: 'operator', text: ': ' },
    { type: 'variable', text: 'prompt' },
    { type: 'empty', text: '' },
    { type: 'operator', text: '});' },
    { type: 'empty', text: '' },
    { type: 'comment', text: '// Creating CSS styles...' },
    { type: 'variable', text: 'const' },
    { type: 'variable', text: ' css' },
    { type: 'operator', text: ' = ' },
    { type: 'function', text: 'generateCSS' },
    { type: 'operator', text: '(' },
    { type: 'variable', text: 'style' },
    { type: 'operator', text: ');' },
    { type: 'empty', text: '' },
    { type: 'comment', text: '// Adding animations and interactions...' },
    { type: 'variable', text: 'const' },
    { type: 'variable', text: ' js' },
    { type: 'operator', text: ' = ' },
    { type: 'function', text: 'generateJavaScript' },
    { type: 'operator', text: '();' },
    { type: 'empty', text: '' },
    { type: 'comment', text: '// Optimizing performance...' },
    { type: 'function', text: 'optimize' },
    { type: 'operator', text: '(' },
    { type: 'variable', text: 'html' },
    { type: 'operator', text: ', ' },
    { type: 'variable', text: 'css' },
    { type: 'operator', text: ', ' },
    { type: 'variable', text: 'js' },
    { type: 'operator', text: ');' },
    { type: 'empty', text: '' },
    { type: 'comment', text: '// Finalizing landing page...' },
    { type: 'keyword', text: 'return' },
    { type: 'operator', text: ' ' },
    { type: 'function', text: 'combine' },
    { type: 'operator', text: '(' },
    { type: 'variable', text: 'html' },
    { type: 'operator', text: ', ' },
    { type: 'variable', text: 'css' },
    { type: 'operator', text: ', ' },
    { type: 'variable', text: 'js' },
    { type: 'operator', text: ');' },
    { type: 'empty', text: '' },
    { type: 'comment', text: '// ✓ Landing page generated successfully!' }
];

// Simplified code lines array
const simplifiedCodeLines = [
    '// Initializing AI generator...',
    'const generator = new LandingPageGenerator();',
    '',
    '// Analyzing user prompt...',
    'const prompt = "Analyzing design requirements...";',
    '',
    '// Detecting design style...',
    'const style = detectStyle(prompt);',
    '',
    '// Generating HTML structure...',
    'const html = generateHTML({',
    '    style: style,',
    '    content: prompt',
    '});',
    '',
    '// Creating CSS styles...',
    'const css = generateCSS(style);',
    '',
    '// Adding animations and interactions...',
    'const js = generateJavaScript();',
    '',
    '// Optimizing performance...',
    'optimize(html, css, js);',
    '',
    '// Finalizing landing page...',
    'return combine(html, css, js);',
    '',
    '// ✓ Landing page generated successfully!'
];

function addCodeLine(lineText, delay = 0) {
    setTimeout(() => {
        const lineDiv = document.createElement('div');
        lineDiv.className = 'code-line';
        
        const lineNum = document.createElement('span');
        lineNum.className = 'line-number';
        lineNum.textContent = currentLineNumber++;
        
        const content = document.createElement('span');
        content.className = 'code-content';
        
        // Parse and colorize code
        const coloredContent = colorizeCode(lineText);
        content.innerHTML = coloredContent;
        
        lineDiv.appendChild(lineNum);
        lineDiv.appendChild(content);
        codeLines.appendChild(lineDiv);
        
        // Auto scroll to bottom
        const terminalBody = codeLines.parentElement;
        terminalBody.scrollTop = terminalBody.scrollHeight;
    }, delay);
}

function colorizeCode(text) {
    if (!text || text.trim() === '') return '&nbsp;';
    
    // Preserve leading spaces
    const leadingSpaces = text.match(/^\s*/)[0];
    const trimmed = text.trim();
    
    if (trimmed === '') return leadingSpaces.replace(/ /g, '&nbsp;');
    
    // Escape HTML first
    let escaped = trimmed
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
    
    // Colorize different parts (order matters!)
    let colored = escaped
        // Comments first (before anything else)
        .replace(/(\/\/.*)/g, '<span class="comment">$1</span>')
        // Strings (must be before keywords to avoid conflicts)
        .replace(/(["'])(?:(?=(\\?))\2.)*?\1/g, '<span class="string">$&</span>')
        // Keywords
        .replace(/\b(const|let|var|function|return|new|if|else|for|while)\b/g, '<span class="keyword">$1</span>')
        // Functions (before variables)
        .replace(/\b([a-zA-Z_$][a-zA-Z0-9_$]*)\s*(?=\()/g, '<span class="function">$1</span>')
        // Numbers
        .replace(/\b(\d+)\b/g, '<span class="number">$1</span>')
        // Operators
        .replace(/([=+\-*/{}();,:.])/g, '<span class="operator">$1</span>')
        // Variables (last, to catch remaining identifiers, but skip if already colored)
        .replace(/\b([a-zA-Z_$][a-zA-Z0-9_$]*)\b/g, (match) => {
            // Skip if already inside a span
            if (match.includes('<span')) return match;
            return `<span class="variable">${match}</span>`;
        });
    
    return leadingSpaces.replace(/ /g, '&nbsp;') + colored;
}

function startCodeAnimation() {
    // Clear previous animation
    if (loadingAnimationInterval) {
        clearInterval(loadingAnimationInterval);
    }
    
    // Reset
    codeLines.innerHTML = '';
    currentLineNumber = 1;
    
    // Add lines with delay
    let delay = 0;
    simplifiedCodeLines.forEach((line, index) => {
        addCodeLine(line, delay);
        delay += 300 + Math.random() * 200; // Random delay between 300-500ms
    });
    
    // Keep adding "processing" messages
    loadingAnimationInterval = setInterval(() => {
        const processingMessages = [
            '// Processing...',
            '// Optimizing assets...',
            '// Applying styles...',
            '// Adding interactions...',
            '// Final checks...'
        ];
        const randomMessage = processingMessages[Math.floor(Math.random() * processingMessages.length)];
        addCodeLine(randomMessage, 0);
    }, 2000);
}

function stopCodeAnimation() {
    if (loadingAnimationInterval) {
        clearInterval(loadingAnimationInterval);
        loadingAnimationInterval = null;
    }
}

function showPreview(code) {
    stopCodeAnimation();
    loadingScreen.style.display = 'none';
    welcomeScreen.style.display = 'none';
    errorContainer.style.display = 'none';
    previewContainer.style.display = 'block';
    
    // Display code in code mode
    generatedCode.textContent = code;
    
    // Clear previous content
    previewInner.innerHTML = '';
    
    // Isolate generated content using iframe to prevent CSS conflicts
    const iframe = document.createElement('iframe');
    iframe.id = 'preview-iframe';
    iframe.style.cssText = 'width: 100%; height: 100%; border: none; background: white; display: block;';
    iframe.sandbox = 'allow-same-origin allow-scripts allow-forms allow-popups allow-modals';
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('scrolling', 'auto');
    iframe.setAttribute('allowfullscreen', 'true');
    
    // Use srcdoc for reliable content loading
    // This is more reliable than contentDocument.write
    try {
        iframe.srcdoc = code;
    } catch (e) {
        console.error('srcdoc not supported, using contentDocument:', e);
        // Fallback to contentDocument if srcdoc not supported
        iframe.onload = function() {
            try {
                const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
                if (iframeDoc) {
                    iframeDoc.open();
                    iframeDoc.write(code);
                    iframeDoc.close();
                }
            } catch (e2) {
                console.error('Error writing to iframe:', e2);
            }
        };
        iframe.src = 'about:blank';
    }
    
    // Append iframe to container
    previewInner.appendChild(iframe);
    
    // Set preview mode as default
    switchToPreviewMode();
}

function showError(message) {
    loadingScreen.style.display = 'none';
    welcomeScreen.style.display = 'none';
    previewContainer.style.display = 'none';
    errorContainer.style.display = 'flex';
    errorMessage.textContent = message;
}

function retry() {
    errorContainer.style.display = 'none';
    welcomeScreen.style.display = 'flex';
}

function exportLandingPage() {
    const code = generatedCode.textContent;
    const blob = new Blob([code], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'landing-page.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
        showNotification('Exported landing-page.html file', 'success');
}

function showNotification(message, type = 'info') {
    notification.textContent = message;
    notification.className = `notification ${type}`;
    notification.classList.add('show');
    
    setTimeout(() => {
        hideNotification();
    }, 3000);
}

function hideNotification() {
    notification.classList.remove('show');
}

function showGuide() {
    const guideMessage = `
HƯỚNG DẪN SỬ DỤNG LANDING PAGE GENERATOR

1. Nhập API Key:
   - Lấy API key từ StreamLake tại: https://www.streamlake.ai/document/DOC/mg6k6nlp8j6qxicx4c9
   - Nhập API key vào ô "KAT-Coder-Pro-V1 API Key"
   - Nhấn nút lưu để lưu API key

2. Chọn phong cách:
   - Chọn một phong cách thiết kế từ danh sách
   - Hoặc chọn "🤖 Tự động" để AI tự nhận diện phong cách phù hợp

3. Mô tả website:
   - Nhập mô tả chi tiết về landing page bạn muốn tạo
   - Càng chi tiết, kết quả càng tốt
   - Có thể dùng nút ⭐ để tạo prompt ngẫu nhiên

4. Tạo Landing Page:
   - Nhấn nút "Tạo Landing Page"
   - Chờ AI tạo landing page cho bạn
   - Xem kết quả và tải xuống khi hài lòng

Lưu ý: API key sẽ được lưu trong trình duyệt của bạn.
    `;
    alert(guideMessage);
}

// Style Preview Handler
function updateStylePreview() {
    const selectedStyle = styleSelect.value;
    
    if (selectedStyle === '') {
        // Show placeholder when no style selected
        showStylePlaceholder();
        return;
    }
    
    // Clear content
    stylePreviewContent.innerHTML = '';
    
    // Create preview element
    const previewElement = createStylePreview(selectedStyle);
    stylePreviewContent.appendChild(previewElement);
    
    // Create description element
    const description = styleDescriptions[selectedStyle] || 'Style preview';
    const descriptionDiv = document.createElement('div');
    descriptionDiv.className = 'style-preview-description';
    descriptionDiv.innerHTML = `<p>${description}</p>`;
    stylePreviewContent.appendChild(descriptionDiv);
    
    // Add dark class if needed (only for preview container, not main app)
    if (darkStyles.includes(selectedStyle)) {
        stylePreviewContent.classList.add('style-preview-dark');
    } else {
        stylePreviewContent.classList.remove('style-preview-dark');
    }
}

function showStylePlaceholder() {
    stylePreviewContent.innerHTML = `
        <div class="style-preview-placeholder">
            <i class="fas fa-paintbrush"></i>
            <p>Chọn một phong cách để xem trước</p>
        </div>
    `;
    stylePreviewContent.classList.remove('style-preview-dark');
}

function createStylePreview(style) {
    const previewDiv = document.createElement('div');
    previewDiv.className = `style-preview-example preview-${style}`;
    
    // The preview content is now purely handled by CSS
    // No need for inline HTML, the CSS ::before and ::after pseudo-elements handle everything
    
    return previewDiv;
}

// Random prompt templates
const randomPrompts = [
    "Cosmetics e-commerce landing page with pastel pink color scheme, minimalist style combined with glassmorphism, smooth animations",
    "Technology website with cyberpunk effects and gradient mesh, dark colors with neon accents, modern and futuristic",
    "Fashion clothing e-commerce landing page with retro vaporwave style, neon colors, beautiful gradients, featuring prominent product images",
    "Online education website with material design style, professional blue color, featuring introduction video",
    "Restaurant landing page with organic minimal style, natural colors, beautiful menu and appetizing food images",
    "Travel website with gradient mesh aurora style, blue and purple colors, featuring interactive map",
    "Smartphone e-commerce landing page with tech minimal style, black and neon blue colors, featuring 3D product display",
    "Yoga and wellness website with organic biomorphic style, soft pastel colors, featuring meditation animations",
    "Mobile game landing page with pixel 8-bit style, vibrant colors, featuring gameplay videos and screenshots",
    "Real estate website with bento UI style, beautiful card layout, featuring map and image gallery",
    "Tech startup landing page with neo-brutalism style, bold colors, strong typography",
    "Luxury fashion website with editorial magazine style, beautiful typography, elegant layout",
    "Fitness app landing page with motion UI style, many animations, energetic orange and red colors",
    "Music website with synthwave outrun style, purple and orange colors, featuring beautiful audio player",
    "Cafe landing page with scandinavian nordic style, beige and warm brown colors, spacious layout",
    "Designer portfolio website with experimental typography style, unique layout, creative",
    "Car sales landing page with long shadow flat 2.0 style, bright colors, modern",
    "Bookstore website with paper-cut collage style, beautiful textures, featuring book previews",
    "Event landing page with kawaii pastel pop style, cute pink and yellow colors, fun and playful",
    "Photographer portfolio website with monochrome duotone style, striking black and white photos",
    "Toy store landing page with claymorphism style, pastel colors, soft rounded shapes",
    "Watch store website with art deco style, luxurious gold and black colors, classic typography",
    "Sports shoe e-commerce landing page with y2k style, chrome and gradient colors, featuring 3D product view",
    "Furniture store website with organic minimal style, natural colors, clean layout",
    "Handmade products landing page with hand-drawn naive style, hand-drawn illustrations, artisanal feel",
    "Tech products website with isometric style, 3D perspective, modern colors",
    "Sports equipment landing page with corporate memphis style, cute illustrations, fresh colors",
    "Jewelry store website with glassmorphism style, beautiful transparent effects, featuring product zoom",
    "Furniture e-commerce landing page with swiss international style, grid layout, clear typography",
    "Lego toy store website with bauhaus style, primary colors, simple geometric shapes"
];

function generateRandomPrompt() {
    // Get random prompt from array
    const randomIndex = Math.floor(Math.random() * randomPrompts.length);
    const randomPrompt = randomPrompts[randomIndex];
    
    // Set prompt textarea value
    promptTextarea.value = randomPrompt;
    
    // Trigger input event to update any dependencies
    promptTextarea.dispatchEvent(new Event('input', { bubbles: true }));
    
    // Add animation effect to button
    randomPromptBtn.style.transform = 'scale(1.2) rotate(360deg)';
    setTimeout(() => {
        randomPromptBtn.style.transform = '';
    }, 500);
    
    // Show notification
    showNotification('Đã tạo prompt ngẫu nhiên!', 'info');
}
