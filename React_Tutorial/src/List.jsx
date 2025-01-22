import PropTypes from 'prop-types'

function List(props){
    

    // games.sort((a, b) => a.name.localeCompare(b.name)); //Alphabetical
    // games.sort((a, b) => b.name.localeCompare(a.name)); //Reverse Alphabetical
    // games.sort((a, b) => a.timeplayed.localeCompare(b.timeplayed)); //Numeric
     // games.sort((a, b) => b.timeplayed.localeCompare(a.timeplayed)); //Reverse Numeric

    
    const itemList = props.items;
    const category = props.category;

    // const lowTimeGames = games.filter(games => games.timeplayed < 5000)

    const listItems = itemList.map(item => <li key={item.id}>
                                        {item.name}: &nbsp;
                                        <b>{item.timeplayed}</b></li>)

    return(<>
            <h3 className="list-cat">{category}</h3>
            <ol className="list-items">{listItems}</ol>
            </>);
}

List.defaultProps = {
    category: "Category",
    items: [],
}

List.propTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape ({id: PropTypes.number,
                                                name: PropTypes.string,
                                                timeplayed: PropTypes.number})),        
                                            }

export default List