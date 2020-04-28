import React from 'react'
import { BounceLoader, BarLoader, BeatLoader, ClimbingBoxLoader } from 'react-spinners'
import { css } from '@emotion/core'

const loaderCSS = css`
margin-top: 25px;
margin-bottom: 25px;
`


function LoadingIndicator() {
    return (
        <div className='App'>
            <h1>Loading .....</h1>
           <BounceLoader css = {loaderCSS} size = {24} color = {'red'} loading />
           <BarLoader css = {loaderCSS} size = {48} color = {'orange'} loading />
           <BeatLoader css = {loaderCSS} size = {72} color = {'maroon'} loading />
           <ClimbingBoxLoader css = {loaderCSS} size = {32} color = {'blue'} loading />
        </div>
    )
}

export default LoadingIndicator
