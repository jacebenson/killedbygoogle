import React from 'react';
import styled from 'styled-components';

import Tombstone from '../assets/tombstone-alt.svg';

// Import Styled Components
import { FooterContainer, FlexWrap } from './Footer.atoms';
import PressCoverage from './PressCoverage';

// Images
import TWITTER from '../assets/twitter.svg';
import GITHUB from '../assets/github.svg';

type Props = {
  url: string;
  imgSrc: string;
  altText: string;
};
const SocialLink: React.FunctionComponent<Props> = ({
  url,
  imgSrc,
  altText,
}: Props) => {
  const style = {
    border: 'none',
  };

  return (
    <a style={style} href={url}>
      <img src={imgSrc} alt={altText} />
    </a>
  );
};

const CopyNotice = styled.div`
  font-size: 0.75em;
  text-align: center;
  margin: 30px 0 20px 0;
`;

const TombstoneStyle = {
  width: '60px',
  marginRight: '10px',
};

const Title = styled.div`
  font-size: 2.5em;
  color: #fafafa;
  font-weight: lighter;
`;

const FooterTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 20px;
`;

const SocialWrapper = styled.div`
  padding: 15px 0;
  display: flex;
  justify-content: center;
  a {
    display: block;
    margin: 0 10px;
  }
`;

export default () => (
  <>
    <PressCoverage />
    <FooterContainer>
      <FlexWrap>
        <FooterTitle>
          <img style={TombstoneStyle} src={Tombstone} alt="Tombstone" />
          <Title>ServiceNow Killed</Title>
        </FooterTitle>
        <div>
          <p>
            ServiceNow Killed is the ServiceNow graveyard; a free and open source
            list of discontinued ServiceNow services, products, and apps.
            We aim to be a source of factual information about the history
            surrounding ServiceNow&apos;s dead projects.
          </p>
          <p>
            <a
              href="https://github.com/jacebenson/snkilled/graphs/contributors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contributors
            </a>
            &nbsp;from around the world help compile, research, and maintain the
            information about dying and dead ServiceNow products. You can join the
            discussion on&nbsp;
            <a href="https://github.com/jacebenson/snkilled">GitHub</a>, or
            follow us on&nbsp;
            <a href="https://twitter.com/jacebenson">Twitter</a>. A project
            by&nbsp;
            <a
              href="https://jace.pro"
              target="_blank"
              rel="noopener noreferrer"
            >
              Jace Benson
            </a>
            .
          </p>
          <p>
            Press inquiries and other assorted death threats?
            <br />
            Throw a&nbsp;
            <a href="mailto:jacebenson@gmail.com">
              jacebenson@gmail.com
            </a>
            .
          </p>
        </div>
        <CopyNotice>
          <a href="https://github.com/jacebenson/snkilled/blob/master/LICENSE">
            &copy; 2020 Jace Benson.
          </a>
        </CopyNotice>
        <SocialWrapper>
          <SocialLink
            url="https://github.com/jacebenson/snkilled"
            altText="GitHub"
            imgSrc={GITHUB}
          />
          <SocialLink
            url="https://twitter.com/snkilled"
            altText="Twitter"
            imgSrc={TWITTER}
          />
        </SocialWrapper>
      </FlexWrap>
    </FooterContainer>
  </>
);
