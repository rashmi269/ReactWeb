import React from 'react'
import { FaFacebook,FaYoutube,FaTwitter,FaInstagram } from 'react-icons/fa';
import { FooterContainer,FooterWrap,FooterLink,FooterLinkWrapper,FooterLinksContainer,FooterLinkItems,FooterLinkTitle,SocialMedia,SocialMediaWrap,SocialLogo,SocialIcons,SocialIconLink,WebsiteRights} from './FooterElemts'


const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
        <FooterLinkWrapper>
            <FooterLinkItems>
                <FooterLinkTitle> About Us  </FooterLinkTitle>
                    <FooterLink to= "/signin">How it works</FooterLink>
                    <FooterLink to= "/signin">Testimonial</FooterLink>
                    <FooterLink to= "/signin">Carrer</FooterLink>
                    <FooterLink to= "/signin">Investor</FooterLink>
                    <FooterLink to= "/signin">Terms of Service</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
                <FooterLinkTitle> Videos  </FooterLinkTitle>
                    <FooterLink to= "/signin">Submit Videos</FooterLink>
                    <FooterLink to= "/signin">Ambassdors</FooterLink>
                    <FooterLink to= "/signin">Agency</FooterLink>
                    <FooterLink to= "/signin">Influencer</FooterLink>
                    
            </FooterLinkItems>
            </FooterLinkWrapper>

            <FooterLinkWrapper>
            <FooterLinkItems>
                <FooterLinkTitle> Contact Us  </FooterLinkTitle>
                    <FooterLink to= "/signin">Contact</FooterLink>
                    <FooterLink to= "/signin">Support</FooterLink>
                    <FooterLink to= "/signin">Destinations</FooterLink>
                    <FooterLink to= "/signin">Sponsorship</FooterLink>
                    
            </FooterLinkItems>
            <FooterLinkItems>
                <FooterLinkTitle> Social Media  </FooterLinkTitle>
                    <FooterLink to= "/signin">Instagram</FooterLink>
                    <FooterLink to= "/signin">Facebook</FooterLink>
                    <FooterLink to= "/signin">Youtube</FooterLink>
                    <FooterLink to= "/signin">Twitter; </FooterLink>
                    
            </FooterLinkItems>
            </FooterLinkWrapper>
        </FooterLinksContainer>
        /*<SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/'>
                dolla
            </SocialLogo>
            <WebsiteRights>dolla &copy; 2022</WebsiteRights>
            <SocialIcons>
                <SocialIconLink href='/' target="_blank"
                 aria-label="Facebook">
                 <FaFacebook />
                </SocialIconLink>
                <SocialIconLink href='/' target="_blank"
                 aria-label="Instagram">
                 <FaInstagram />
                </SocialIconLink>
                <SocialIconLink href='/' target="_blank"
                 aria-label="Youtube">
                 <FaYoutube />
                </SocialIconLink>
                <SocialIconLink href='/' target="_blank"
                 aria-label="Twitter">
                 <FaTwitter />
                </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
       </SocialMedia>
      </FooterWrap>
    </FooterContainer>
    
    
  );
};

export default Footer;
