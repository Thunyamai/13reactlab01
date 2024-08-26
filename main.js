const App = () => {
    const firstName = 'Miss Thunyamai';
    const lastName = 'Yonglun';
    const birthYear = 1993;
    const st1 = {
        backgroundColor: 'pink',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'baseline',
        }
    const st2 = { 
        color: 'deeppink',
        backgroundColor: 'gold' }
    
    return (
        <div>
            <h1 style={st1} >{firstName} {lastName}</h1>
            <p style={st2} >อายุ: {calculateAge(birthYear)} ปี</p>
        </div>
    );
}

const calculateAge = (birthYear) => {
    const currentYear = new Date().getFullYear();
    return currentYear - birthYear;
};

ReactDOM.createRoot(document.querySelector('#root'))
    .render(<App />)