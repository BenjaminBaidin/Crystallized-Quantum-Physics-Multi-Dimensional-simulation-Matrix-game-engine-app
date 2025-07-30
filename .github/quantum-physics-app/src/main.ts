import { QuantumSimulator } from './components/QuantumSimulator';

const simulator = new QuantumSimulator();

function main() {
    console.log('Initializing Quantum Physics App...');
    simulator.runSimulation();
    const results = simulator.getResults();
    console.log('Simulation Results:', results);
}

main();