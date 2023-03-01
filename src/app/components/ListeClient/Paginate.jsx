export const Paginate = ({ selectedPage, setSelectedPage }) => {
  return (
    <>
      <button
        id="previous_button"
        onClick={() => setSelectedPage(selectedPage - 1)}
        disabled={selectedPage === 1 ? true : false}
        className="inline-flex items-center px-4 py-2 mr-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white disabled hover:border-1 hover:border-gray-700 dark:hover:border-gray-50"
      >
        Précédent
      </button>
      <button
        id="next_button"
        onClick={() => setSelectedPage(selectedPage + 1)}
        disabled={selectedPage === 10 ? true : false}
        className="inline-flex items-center px-4 py-2 mr-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white hover:border-1 hover:border-gray-700 dark:hover:border-gray-50"
      >
        Suivant
      </button>
    </>
  );
};
