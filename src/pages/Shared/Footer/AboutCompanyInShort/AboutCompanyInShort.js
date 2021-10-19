import React from 'react';
import './AboutCompanyInShort.css'

const AboutCompanyInShort = () => {
    return (
        <div>
            <h4 className="my-4">About Sundarban Healthcare</h4>
            <p className="pe-4">Sed ipsum posuere nunc libero pellentesque vitae ultrices posuere. Praesent justo dui laoreet dignissim lectus etiam ipsum habitant tristique</p>
            <div className="pe-4">
                <p class="my-0 pb-1"><i class="fas fa-map-marker-alt footer-icon"></i> &nbsp; Plot . 38 St. 39 UpHill Town, Newyork, USA</p>
                <p class="my-0 pb-1"><i class="fas fa-phone-volume footer-icon"></i> &nbsp; +522 234 56789 / +522 234 56780</p>
                <p class="my-0 pb-1"><a className="copany-contact" href="#" ><i class="fas fa-envelope-open footer-icon"></i> &nbsp; info@sundarban-healthcare.org</a></p>
                <p class="my-0 pb-1"><a className="copany-contact" href="#"><i class="fas fa-globe footer-icon"></i> &nbsp; www.sundarban-healthcare.org</a></p>
            </div>
        </div>
    );
};

export default AboutCompanyInShort;