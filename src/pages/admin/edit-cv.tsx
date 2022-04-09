import { GetStaticProps, NextPage } from 'next';
import { useState } from 'react';
import { useAuthCheck } from 'hooks';
import { getCv } from 'lib';
import { CVData } from 'types';

type Props = {
  data: CVData;
};

const EditCVPage: NextPage<Props> = ({ data }) => {
  useAuthCheck();

  return (
    <div className="m-5 rounded  bg-white p-5 shadow-md">
      <div className="flex flex-row items-center justify-between">
        <h1 className="text-xl font-bold">Edit CV</h1>
        <button className="rounded bg-blue-400 px-5 py-2 font-semibold text-white">
          Save
        </button>
      </div>
      <input type="text" value={data?.title} />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const cv = await getCv('javascript');

  return {
    props: {
      data: cv.data(),
    },
  };
};

export default EditCVPage;
