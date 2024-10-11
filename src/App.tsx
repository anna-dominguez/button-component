import Blue from './components/Blue';
import TransparentWithBorder from './components/TransparentWithBorder';
import Transparent from './components/Transparent';
import NoPaddingBlue from './components/NoPaddingBlue';
import Red from './components/Red';
import NoPaddingBlack from './components/NoPaddingBlack';

const App = () => (
	<main className="w-full min-h-screen bg-gradient-to-br from-[#F9FAFB] to-[#D2D6DB] py-[112px] items-center px-6 flex justify-center">
		<section className="flex flex-col gap-12 h-fit max-w-685">
			<Blue />
			<TransparentWithBorder />
			<Transparent />
			<NoPaddingBlue />
			<NoPaddingBlack />
			<Red />
		</section>
	</main>
);

export default App;
