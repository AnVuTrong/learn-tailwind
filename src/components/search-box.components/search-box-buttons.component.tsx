import React from 'react';
import { SearchBoxButton } from './search-box-button.component';
import { SEARCH_BOX_BUTTONS } from '../../constants/search-box-buttons.constants';

export class SearchBoxButtons extends React.Component {
  handleButtonClick = (buttonId: string) => {
    console.log(`Button clicked: ${buttonId}`);
    // Add your click handling logic here
  };

  render() {
    return (
      <div className='grid grid-cols-4 grid-rows-2 gap-4 mt-8'>
        {SEARCH_BOX_BUTTONS.map((button) => (
          <SearchBoxButton
            key={button.id}
            button={button}
            onClick={() => this.handleButtonClick(button.id)}
          />
        ))}
      </div>
    );
  }
} 