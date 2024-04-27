import { render } from '@testing-library/react';

import Accounts from './accounts';

describe('Accounts', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Accounts />);
    expect(baseElement).toBeTruthy();
  });
});
