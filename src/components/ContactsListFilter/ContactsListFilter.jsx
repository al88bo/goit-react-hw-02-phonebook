const ContactsListFilter = ({ filter, changeFilter }) => (
  <div>
    <p>Find contacts by name</p>
    <input type="text" name="keyword" onChange={changeFilter} value={filter} />
  </div>
);
export { ContactsListFilter };
