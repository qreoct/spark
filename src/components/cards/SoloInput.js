import React, {useState} from 'react';
import QuestionCard from './QuestionCard';
import PictureCard from './PictureCard';

const SoloInput = ({data, displayToast, submitHandler}) => {
  let colors = ['jade', 'topaz', 'amethyst', 'amber'];
  let col = colors[Math.floor(Math.random() * colors.length)];

  const [reflection, setReflection] = useState('');
  const [picData, setData] = useState(null);
  const [selectedPicture, setSelected] = useState(null);

  const handleReflection = (e) => {
    setReflection(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (reflection == '') {
      displayToast('Please write out a reflection!');
    } else {
      submitHandler({
        reflection: reflection,
        picture: picData || null
      });
      setReflection('');
      displayToast('Response submitted!');
    }
  }

  const selectPicture = (pic) => {
    setSelected(pic)

    //update question
    data = {...data, pic: {...pic}};
    setData(data)
  }

  const renderForm = () => {
    return (
      <div className="solo__input--form">

        {selectedPicture
          ?
          <div className="solo__input--pic"> 
            <PictureCard key='p' data={picData} mode='solo' isActive={true} />
          </div>
          : null
        }

        <h1 className="solo__input--title">Reflection</h1>
        <textarea value={reflection} onChange={handleReflection}
          spellCheck="false"
          className="textarea"/>
        <button onClick={handleSubmit} onTouchEnd={handleSubmit}
          className={'input--button h5-size bold selectable end --spark'}> Save </button>
      </div>
    )

  }

  return (
    <div className="solo__input">
      {data.canPicture 
        ? <>
          {!selectedPicture 
            ? <PictureCard topic={data.topic} data={data} isActive={true} mode='solo'
              isSelectable={true} handleSelect={selectPicture}/>
            : renderForm()
          }
        </>
        : <>
          <QuestionCard data={data} isFavoritible={true} displayToast={displayToast}
            color={col} mode='solo'/>
          {renderForm()}
        </>
      }
    </div>
  );
};

export default SoloInput