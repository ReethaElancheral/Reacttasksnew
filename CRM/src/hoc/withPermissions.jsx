

const userPermissions = ['canViewLead', 'canEditLead']; 
function withPermissions(WrappedComponent, requiredPermission) {
  return function PermissionWrapper(props) {
   
    if (!userPermissions.includes(requiredPermission)) {
      
      return <p style={{ color: 'red', fontWeight: 'bold' }}>Access denied.</p>;
    }
    
    return <WrappedComponent {...props} />;
  };
}

export default withPermissions;



