let data = [
    {
        name: 'Read Temporal Analysis paper',
        due: 'Apr 27'
    },
    {
        name: 'Read FUUST paper',
        due: 'Apr 27'

    },
    {
        name: 'Play Around with ONC data',
        due: 'Apr 27'
    },
    {
        name: 'Research AI Agents for ONC data',
        due: 'Apr 27'
    },
    {
        name: 'Rent car',
        due: 'Apr 27'
    },
    {
        name: 'Book hotel',
        due: 'Apr 27'
    },
    {
        name: 'Pick up house key',
        due: 'Apr 28'
    },
    {
        name: 'Pick up CD player',
        due: 'Apr 28'
    },  
    {
        name: 'Pick up house key',
        due: 'Apr 28'
    },
    {
        name: 'Move to new house',
        due: 'Apr 30'
    },
    {
        name: 'Buy gels and new camelback',
        due: 'May 1'
    },

];

const info = document.querySelector('#info') // id so we use #

// mapping function: go through array and display 
let details = data.map(task => '<div>' + task.name + ' by ' + task.due + '</div>');

info.innerHTML = details.join('\n')
