'use client';

const WaitingListBtn = ({ color = 'primary-red' }) => {
  const getEmail = () => {
    alert('email submission activated');
  };

  return (
    <button
      className={`font-parkinsans rounded-full px-8 py-2 text-body2 font-semibold text-white md:max-w-[250px] bg-${color}`}
      onClick={() => getEmail()}
    >
      Join the waiting list
    </button>
  );
};

export default WaitingListBtn;
