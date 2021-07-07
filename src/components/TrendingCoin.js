import React from 'react'
import Styled, { keyframes } from 'styled-components'

const trendCardGrow = keyframes`
    from{ transform: scale(1); }
    to{ transform: scale(1.2); }
`

const StyledTrendCard = Styled.div`
    width: 10%;
    height: 10%;

    &:hover{
        animation-name: ${trendCardGrow};
        animation-duration: .5s;
    }

    img {
        width: 50%;
        height: auto;
    }
`

const TrendingCoin = (props) => {
    const { trend } = props;


    return (
        <StyledTrendCard>
            <h3>{trend.name}</h3>
            <img src={trend.thumb} />
            <p>{trend.symbol}</p>
            <p>{trend.market_cap_rank}</p>
        </StyledTrendCard>
    )
}

export default TrendingCoin
