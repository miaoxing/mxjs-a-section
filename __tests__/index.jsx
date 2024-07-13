import { Section } from '../';
import { render } from '@testing-library/react';
import { ConfigProvider } from 'antd';

describe('Section', () => {
  test('renders correctly', () => {
    const { container } = render(
      <ConfigProvider theme={{ hashed: false }}>
        <Section>foo</Section>
      </ConfigProvider>
    );

    expect(container).toMatchSnapshot();
  });
});
