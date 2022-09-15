import {useMemo} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/filter/filter-actions'; 
import {List} from './Contacts.styled';
import ConactCard from "components/ConactCard/ConactCard";
import PropTypes from 'prop-types';


export default function Contacts({removeConactApp}){
    
    const dispatch = useDispatch();
    const {contacts, filter } = useSelector(store => store);
    const { items } = contacts;
    const normalizeTodos = filter.toLowerCase();

    const visibleContacts = items.filter(contact => contact.name.toLowerCase().includes(normalizeTodos));

    const getCardMarking = useMemo(() => {
       
        return (visibleContacts.map( (user) =>
                <ConactCard 
            key={user.name + user.id}
            id={user.id}
            name = {user.name}
            number = {user.phone}
            removeCard={(e) => { if (visibleContacts.length === 1) dispatch(setFilter("")); removeConactApp(e.currentTarget.name); }}/>
            )
        );
    },[removeConactApp, visibleContacts, dispatch]);
    
    return (
        <List>
            {getCardMarking}
        </List>
    )
};

Contacts.propTypes={
    removeConactApp: PropTypes.func.isRequired,
    contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string).isRequired,
    )
}