import RawHtml from 'components/RawHtml';

type Props = {
  introduction: string;
};

const AboutMe = ({ introduction }: Props) => {
  return (
    <div className="pb-3">
      <h2 className="pb-3 text-base font-semibold">ABOUT ME</h2>
      <RawHtml
        html={introduction}
        className="flex flex-col gap-3 text-justify"
      />
    </div>
  );
};

export default AboutMe;
