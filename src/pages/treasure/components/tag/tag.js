export default {
  functional: true,
  props: {
    color: {
      type: String,
      default: ''
    },
    isGoing: {
      type: Boolean,
      default: true
    }
  },
  render: (h, context) => {
    const { props } = context;
    return (
      <div></div>
    );
  }
};