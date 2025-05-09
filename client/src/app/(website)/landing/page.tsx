import React from 'react'
import HeroSection from './HeroSection'
import FeaturesSection from './FeaturesSection'
import DiscoverSection from './DiscoverSection'
import CallToActionSection from './CallToActionSection'
import FooterSection from './FooterSection'

export default function LandingPage() {
    return (
        <div>
            <HeroSection />
            <FeaturesSection />
            <DiscoverSection />
            <CallToActionSection />
            <FooterSection />
        </div>
    )
}
