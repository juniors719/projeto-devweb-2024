// Componente para mostrar o ranking
const Ranking = () => {
    return (
        <div className="ranking">
            <div className="nextcomp-ranking-header">
                <span>Ranking</span>
            </div>
            <ul className="">
                {/* Exemplo de ranking */}
                <li>Usuário 1 - 1000 pontos</li>
                <li>Usuário 2 - 950 pontos</li>
                <li>Usuário 3 - 900 pontos</li>
            </ul>
        </div>
    );
};

export default Ranking;
