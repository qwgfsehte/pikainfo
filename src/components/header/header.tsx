import SearchInput from './InputComponent';
import SearchButton from './buttonComponent';
import './header.scss';
import React from 'react';
import { HeaderProps, HeaderState } from '../../interfaces/interface';

class Header extends React.Component<HeaderProps, HeaderState> {
  constructor(props: HeaderProps) {
    super(props);
    this.state = {
      inputValue: localStorage.getItem('searchValueInput') || '',
    };
  }

  handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ inputValue: event.target.value });
  };

  handleButtonClick = async () => {
    localStorage.setItem(
      'searchValueInput',
      this.state.inputValue.trim().toLowerCase()
    ),
      await this.props.fetchData();
  };

  render(): React.ReactNode {
    return (
      <header className="header">
        <img src="./src/assets/logo/logo.png" alt="" className="logo" />
        <div className="search-form">
          <SearchInput
            value={this.state.inputValue}
            onChange={this.handleInputChange}
          />
          <SearchButton onClick={this.handleButtonClick} />
        </div>
      </header>
    );
  }
}

export default Header;
