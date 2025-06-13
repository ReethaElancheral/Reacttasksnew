const withRole = (Component, allowedRoles) => {
  return (props) => {
    const role = props.role;
    if (!allowedRoles.includes(role)) return <p>Access Denied</p>;
    return <Component {...props} />;
  };
};

export default withRole;
