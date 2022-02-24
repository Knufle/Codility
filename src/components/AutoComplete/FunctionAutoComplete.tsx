import { useState } from 'react';
import api from '../../services/api';
import debounce from '../../utils/debounce';
// import { debounce } from 'lodash';

interface AutoComplete {
  score: number;
  tags: string[];
  word: string;
}

export default function FunctionAutoComplete() {
  const [autocomplete, setAutocomplete] = useState<AutoComplete[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const DEBOUNCE = 500;
  const onDebouncedSearch = debounce(onSearch, DEBOUNCE);

  function onSearch(query: string) {
    if (!query) {
      onDebouncedSearch.cancel();
      setIsLoading(false);
      setAutocomplete([]);
    } else {
      setIsLoading(true);
      api.get('words', { params: { ml: query } }).then((response) => {
        setIsLoading(false);
        setAutocomplete(response.data);
      });
    }
  }

  return (
    <div className="wrapper">
      <h2>Function AutoComplete</h2>
      <div className="control">
        <input
          className="input"
          type="text"
          onChange={(e) => onDebouncedSearch(e.target.value)}
        />
        {isLoading ? <span>loading</span> : ''}
      </div>
      {autocomplete.length ? (
        <div className="list">
          <ul>
            {autocomplete.map((word, i) => (
              <li className="list-item" key={i}>
                {word.word}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        ''
      )}
    </div>
  );
}
