import { Card } from 'antd';
import PropTypes from 'prop-types';

const Section = ({ title, children, ...props }) => {
  return (
    <Card className="mb-6 [&_.ant-card-body>:last-child]:mb-0" title={title} {...props}>
      {children}
    </Card>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export { Section };