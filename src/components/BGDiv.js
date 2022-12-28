const BGDiv = (props) => {
    
return (
<div className={props.className+' bg-gradient-to-b from-secondary-1 to-secondary-2'}>
    {props.children}
</div>
);
    
};
    
export default BGDiv;