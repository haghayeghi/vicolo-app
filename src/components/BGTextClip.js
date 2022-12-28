const BGText = (props) => {
    
return (
<div className={props.className+' text-transparent bg-clip-text bg-gradient-to-b from-secondary-1 to-secondary-2'}>
    {props.children}
</div>
);
    
};
    
export default BGText;