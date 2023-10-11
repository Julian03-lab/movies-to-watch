const voteAverageFormatter = (voteAverage: number): string => {
    const formattedVoteAverage = (voteAverage % 1 === 0) ? voteAverage.toFixed(0) : voteAverage.toFixed(1);
    return formattedVoteAverage;
};

export default voteAverageFormatter;
