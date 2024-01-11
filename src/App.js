import React, {useState, useEffect} from 'react';

import { IntlProvider, FormattedMessage,FormattedNumber } from 'react-intl';

import './App.css';

const messages = {
  'tr-TR': {
    title:"Merhaba Dünya",
    description:"{count} yeni mesajınız var."
  },
  'en-US' :{
    title:"Hello World",
    description:"You have {count} new messages."


  },
};

function App() {
const isLocal = localStorage.getItem('language');
const local = isLocal ? isLocal : navigator.language;
  const [language,setLanguage] = useState(local);

  useEffect(() =>{
localStorage.setItem('language',language)
  },[language])
  return (
    <div className="App">
    {/* burada hangi dili verirsek onu kullanır. */}
     <IntlProvider locale={language} messages={messages[language]}>             
      <FormattedMessage id='title'></FormattedMessage>
<p>
<FormattedMessage id='description' values={{count:4}}></FormattedMessage>

</p>

      <br/>
      <br/>
      <button onClick={() => setLanguage('tr-TR')}>TR</button>
      <button onClick={() => setLanguage('en-US')}>EN</button>
     </IntlProvider>
    </div>
  );
}

export default App;
