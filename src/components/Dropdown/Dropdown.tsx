/*
Prompt:
  We have defined a basic dropdown via the Dropdown and DropdownItem components below, with example usage
  in the ExampleNav component. The Dropdown and DropdownItem components have some problems, and also 
  have room for improvements (doesn't everything?) A couple items TODO here (make sure to explain with comments!)
  
  0. How are you today? 😊 I'm doing fine, what about you?
  1. Please fix any obvious issues you see with the dropdown and then save your gist. I did it in TypeScript, hope you don't mind.
  2. Please then make improvements to the dropdown and then save your gist again. Done.
  3. Consider the different ways that this dropdown might be used and what changes would
     be neccessary to make it more flexible. DropdownItem could be implemented directly by Dropdown and then Dropdown would also receive an array of objects containing both the href and title to be used by DropdownItem, but I'm not sure if that's what you want.
  4. If we wanted to sync the dropdown selection to a server with this hypothetial "syncing library"
     `app.sync('PATCH', 'users/'+app.USER.id, { dropdown_1_state: {true,false} })` where would this be included? Should
     the state be read again from the server to show the dropdown open/closed on page load? We could manage this state with useReducer or Redux (depends on the store and app size) and then store it in localStorage while also rehydrating it on page reload.
  5. If we wanted to pass children (like this example) OR a Promise that resolves to an array of items
     what changes should be made? (just a sentence or two or some code is ok). If we wanted a really abstract higher order Dropdown component, we could receive the promise and resolve it inside the component (although I prefer to resolve it in the component that is managing this data), but what would be actually better is to implement a loading state for the Dropdown and associate this prop to the promise fetching so once it's done, the component would actually render the children.

     Btw, I refactored it so all components are actually working, you can test it, I just didn't add the css classes for the dropdown to show/hide. I also refactored some typos.
  
  PS: No need to worry about CSS or about making it actually run.
 */

import React, { PureComponent } from 'react';

interface DropdownProps {
  label: string;
}

interface DropdownState {
  isOpen: boolean;
}

class Dropdown extends PureComponent<DropdownProps, DropdownState> {
  constructor(props: DropdownProps) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  toggle() {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
    }));
  }

  render() {
    const { isOpen } = this.state;
    const { label } = this.props;

    return (
      <div className="dropdown">
        <button
          type="button"
          className="dropdown-button"
          id="dropdownButton"
          aria-haspopup="true"
          aria-expanded={isOpen}
          onClick={this.toggle.bind(this)}
        >
          {label}
        </button>

        <ul
          className={`${isOpen ? 'dropdown-open' : ''} dropdown-menu`}
          aria-labelledby="dropdownButton"
          role="menu"
        >
          {this.props.children}
        </ul>
      </div>
    );
  }
}

interface DropdownItemProps {
  href: string;
}

class DropdownItem extends PureComponent<DropdownItemProps> {
  constructor(props: DropdownItemProps) {
    super(props);
  }
  render() {
    return (
      <li>
        <a href={this.props.href}>{this.props.children}</a>
      </li>
    );
  }
}

export class ExampleNav extends PureComponent {
  render() {
    return (
      <nav>
        <a href="/page1">Page 1</a>
        <Dropdown label="More items">
          <DropdownItem href="/page2">Page 2</DropdownItem>
          <DropdownItem href="/page3">Page 3</DropdownItem>
          <DropdownItem href="/page4">Page 4</DropdownItem>
        </Dropdown>
        <Dropdown label="Even more items">
          <DropdownItem href="/page5">Page 5</DropdownItem>
          <DropdownItem href="/page6">Page 6</DropdownItem>
        </Dropdown>
      </nav>
    );
  }
}
