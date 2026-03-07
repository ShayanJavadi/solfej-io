const THROTTLE_MS = 500;
let lastPianoKeyTime = 0;
let lastFretboardNoteTime = 0;

function trackEvent({ category, action, label, value }) {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
        window.gtag('event', action, {
            event_category: category,
            event_label: label,
            value,
        });
    }
}

export function appStoreLinkClicked(value = 0) {
    trackEvent({ category: "App Store Button", action: "Click", label: "Website Conversion", value })
}

export function socialLinkClicked(platform) {
    trackEvent({ category: "Social Link", action: "Click", label: platform })
}

export function contactClicked() {
    trackEvent({ category: "Contact", action: "Click", label: "Email Link" })
}

export function newsletterClicked(location) {
    trackEvent({ category: "Newsletter", action: "Click", label: location })
}

export function trackSearchQuery(type, query) {
    trackEvent({ category: "Search", action: "Query", label: `${type}: ${query}` })
}

export function trackSearchResultClick(type, name) {
    trackEvent({ category: "Search", action: "Result Click", label: `${type}: ${name}` })
}

export function trackAudioPlayback(itemName) {
    trackEvent({ category: "Audio Playback", action: "Play", label: itemName })
}

export function trackPianoKeyClick(context, note) {
    const now = Date.now();
    if (now - lastPianoKeyTime < THROTTLE_MS) return;
    lastPianoKeyTime = now;
    trackEvent({ category: "Piano", action: "Key Click", label: `${context}: ${note}` })
}

export function trackFretboardNoteClick(context, note) {
    const now = Date.now();
    if (now - lastFretboardNoteTime < THROTTLE_MS) return;
    lastFretboardNoteTime = now;
    trackEvent({ category: "Fretboard", action: "Note Click", label: `${context}: ${note}` })
}

export function navigationClicked(label) {
    trackEvent({ category: "Navigation", action: "Click", label })
}

export function blogShareClicked(platform, route) {
    trackEvent({ category: "Blog Share", action: "Click", label: `${platform}: ${route}` })
}

// --- New engagement tracking functions ---

export function trackContentView(type, name) {
    trackEvent({ category: "Content View", action: `${type} Page`, label: name })
}

export function trackScrollDepth(milestone) {
    trackEvent({ category: "Engagement", action: "Scroll Depth", label: `${milestone}%` })
}

export function trackTimeOnPage(seconds) {
    trackEvent({ category: "Engagement", action: "Time on Page", label: `${seconds}s` })
}

export function trackCrossLinkClick(direction) {
    trackEvent({ category: "Cross Link", action: "Click", label: direction })
}

export function trackRelatedContentClick(type, name) {
    trackEvent({ category: "Related Content", action: type, label: name })
}

export function trackBlogThumbnailClick(route) {
    trackEvent({ category: "Blog", action: "Thumbnail Click", label: route })
}

export function trackSearchNoResults(type, query) {
    trackEvent({ category: "Search", action: "No Results", label: `${type}: ${query}` })
}

export function trackSectionView(section) {
    trackEvent({ category: "Section Viewed", action: "View", label: section })
}

export function trackRandomClick(type) {
    trackEvent({ category: "Random", action: "Click", label: type })
}

export function trackCoachmarkImpression(id) {
    trackEvent({ category: "Coachmark", action: "Impression", label: id })
}

export function trackCoachmarkClick(id, target) {
    trackEvent({ category: "Coachmark", action: "Click", label: `${id}: ${target}` })
}
