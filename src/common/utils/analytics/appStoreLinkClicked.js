import { trackCustomEvent } from 'gatsby-plugin-google-analytics'

export default (value = 0) => {
    trackCustomEvent({
        // string - required - The object that was interacted with (e.g.video)
        category: "App Store Button",
        // string - required - Type of interaction (e.g. 'play')
        action: "Click",
        // string - optional - Useful for categorizing events (e.g. 'Spring Campaign')
        label: "Website Conversion",
        value
    })
}