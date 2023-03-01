export const Paginate = ({ selectedPage, setSelectedPage }) => {
  return (
    <>
      <button
        id="previous_button"
        onClick={() => setSelectedPage(selectedPage - 1)}
        disabled={selectedPage === 1 ? true : false}
        className="inline-flex items-center px-4 py-2
       text-sm font-medium text-gray-500 bg-white border 
       border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 
       dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white disabled"
      >
        Précédent
      </button>
      <button
        id="next_button"
        onClick={() => setSelectedPage(selectedPage + 1)}
        disabled={selectedPage === 10 ? true : false}
        className="inline-flex items-center px-4 py-2 ml-3 text-sm font-medium 
      text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400
      dark:hover:bg-gray-700 dark:hover:text-white"
      >
        Suivant
      </button>
    </>
  );
};
