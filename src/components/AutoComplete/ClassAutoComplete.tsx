import { Component } from 'react';
import api from '../../services/api';
import debounce from '../../utils/debounce';

interface Props {}

interface State {
  autocomplete: AutoComplete[];
  isLoading: boolean;
}

interface AutoComplete {
  score: number;
  tags: string[];
  word: string;
}

export default class ClassAutoComplete extends Component<Props, State> {
  private DEBOUNCE: number;
  private onDebouncedSearch: {
    (...args: any[]): void;
    cancel: () => void;
  };
  constructor(props: Props) {
    super(props);
    this.state = {
      autocomplete: [],
      isLoading: false,
    };
    this.DEBOUNCE = 500;
    this.onDebouncedSearch = debounce(this.onSearch.bind(this), this.DEBOUNCE);
  }

  onSearch(query: string) {
    if (!query) {
      this.onDebouncedSearch.cancel();
      this.setState({
        autocomplete: [],
        isLoading: false,
      });
    } else {
      this.setState({
        isLoading: true,
      });
      api.get('words', { params: { ml: query } }).then((response) => {
        this.setState({
          autocomplete: response.data,
          isLoading: false,
        });
      });
    }
  }

  render() {
    return (
      <div className="wrapper">
        <h2>Class AutoComplete</h2>
        <div className="control">
          <input
            className="input"
            type="text"
            onChange={(e) => this.onDebouncedSearch(e.target.value)}
          />
          {this.state.isLoading ? <span>loading</span> : ''}
        </div>
        {this.state.autocomplete.length ? (
          <div className="list">
            <ul>
              {this.state.autocomplete.map((word, i) => (
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
}
