import React, { useEffect } from 'react';
import {connect} from 'react-redux';

import Picture from '../components/Picture';

import {fetchPicture} from '../actions/picturesActions';

import '../styles/index.css';
import BackButton from '../components/BackButton';
import LinkButton from '../components/LinkButton';

const PicturePage = ({dispatch, loading, pictures, hasErrors}) => {

  useEffect(() => {
    dispatch(fetchPicture());
  }, [dispatch]);

  const renderPicture = () => {
    if (loading) return <p> Loading... </p>;
    if (hasErrors) return <p> Error :( </p>;

    return <Picture key={pictures.id} data={pictures} question="What is a memory that this picture triggers?"/>;
  };

  return (
    <div className="game__picture-page">

      <div>
        {renderPicture()}
      </div>

      <div onClick={() => dispatch(fetchPicture())} className="game__shuffle--btn">
        <LinkButton title="shuffle" />
      </div>

      <BackButton />
    </div>
  );

};

const mapStateToProps = (state) => ({
  loading: state.pictures.loading,
  pictures: state.pictures.pictures,
  hasErrors: state.pictures.hasErrors,
});

export default connect(mapStateToProps)(PicturePage);