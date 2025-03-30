import React from 'react';
import styled from '@emotion/styled';

const TitleLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 1.3;
  margin-top: 10px;
  font-size: 13px;

  & p.left {
    font-weight: bold;
  }
`;

const Line = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
  font-style: italic;
`;

const Bullets = styled.ul`
  padding-inline-start: 30px;
  padding-top: 6px;

  & li {
    text-align: justify;
    margin-top: 2px;
    font-size: 13px;
    line-height: 1.2;
  }
`;

function Information(props) {
  const leftTitle = props.leftTitle;
  const rightToTitle = props.rightToTitle;

  const leftLine = props.leftLine;
  const rightToLine = props.rightToLine;

  const bullets = props.bullets;

  return (
    <>
      <TitleLine>
        <p className="left">{leftTitle}</p>
        <p className="right">{rightToTitle}</p>
      </TitleLine>
      <Line>
        <p className="left">
          {React.Children.map(leftLine, (child, i) => {
            return <React.Fragment key={i}>{child}</React.Fragment>;
          })}
        </p>
        <p className="right" dangerouslySetInnerHTML={{ __html: rightToLine }} />
      </Line>

      {bullets && bullets.length > 0 && (
        <Bullets>
          {bullets.map((e, i) => (
            <li style={{ marginTop: '4px' }} key={i} dangerouslySetInnerHTML={{ __html: e }} />
          ))}
        </Bullets>
      )}
    </>
  );
}

const LinedInformationLine = styled.div`
  font-size: 12px;
  line-height: 1.3;
  &:first-of-type {
    margin-top: 8px;
  }

  & span.title {
    font-weight: bold;
    display: inline-block;
    width: 40mm;

    &::after {
      content: ' :';
      font-weight: normal;
    }
  }
`;

function LinedInformation(props) {
  const lines = props.lines;

  return (
    <>
      {lines.map(([lineTitle, lineContent], i) => (
        <LinedInformationLine key={i}>
          <span className="title">{lineTitle}</span>
          <span className="content">{lineContent.split(/\s*,\s*/).join(' ┆ ')}</span>
        </LinedInformationLine>
      ))}
    </>
  );
}

const SocialLinkHref = styled.a`
  text-decoration: none;
  color: #0000ee;
  display: block;
  font-size: 14px;

  &:first-of-type {
    margin-top: 10px;
  }

  &:not(:first-of-type) {
    padding-top: 6px;
  }

  & i.fa {
    color: #000;
    display: inline-flex;
    width: 16px;
  }
`;

export { Information, LinedInformation, SocialLinkHref };
