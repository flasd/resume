import React from 'react';
import { Link, SectionText, SectionTitle } from '../../Typography';

export default function ProfessionalProfile() {
  const [readMore, setReadMore] = React.useState(false);

  const handleReadMore = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setReadMore(!readMore);
  };

  return (
    <>
      <SectionTitle>Professional profile</SectionTitle>

      <SectionText>
        Software Engineer with over{' '}
        <strong>5 years of experience with JavaScript</strong>, currently
        working with <strong>React and Typescript</strong>, and looking for an
        opportunity to be part of a forward-thinking startup where I can
        contribute to building a strong product and engineering culture.
      </SectionText>

      {!readMore && (
        <Link href="#" onClick={handleReadMore}>
          Read more
        </Link>
      )}

      {readMore && (
        <SectionText>
          I love working on complex problems with teams of talented people. I
          hate being the smartest guy in the room. I speak near-native English,
          know a thing or two about design, and love to watch Rick and Morty.
          I’m a very driven and committed person and I love public speaking.
        </SectionText>
      )}
    </>
  );
}
