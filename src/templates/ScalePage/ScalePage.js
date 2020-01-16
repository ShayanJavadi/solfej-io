
import React from 'react';
import Layout from '../../components/layout';
import MdHeader from '../../components/MdHeader/MdHeader';
import Page from '../../components/Page/Page';
import AliasOverline from '../partials/AliasOverline';
import ScaleInformation from './ScaleInformation/ScaleInformation';
import ScaleInstrumentDiagrams from './ScaleInstrumentDiagrams/ScaleInstrumentDiagrams';
import "./ScalePage.scss";

const renderHeader = (scale) => {
    return (
        <div className="header-container flex-column-center">
            <AliasOverline aliases={scale.aliases} />
            <MdHeader subText="Below you can find guitar and piano scale diagrams, notes, intervals, chords, and aliases">
                {scale.displayName} Scale
            </MdHeader>
        </div>
    )
}

export default function ScalePage({ data }) {
    const { scale } = data.allSitePage.edges[0].node.context;
    const { displayName } = scale;
    console.log(scale)
    return (
        <Layout
            title={`How to play ${displayName} scale on guitar and piano? What notes are in ${displayName}`}
            description={`How to play a ${displayName} scale on piano and guitar? What notes and intervals are in ${displayName}? Find out how and search through 1000s of scales.`}
            image="/images/chords.png"
        >
            <Page className="scale-page md-styles">
                {renderHeader(scale)}
                <ScaleInstrumentDiagrams scale={scale} />
                <ScaleInformation scale={scale} />
            </Page>
        </Layout>
    )
}

export const pageQuery = graphql`
  query($path: String!) {
    allSitePage(filter: { path: { eq: $path } }) {
      edges {
        node {
            context {
                scale {
                    name,
                    intervals,
                    aliases {
                        name,
                        url
                    },
                    notes,
                    displayName,
                    rootNote,
                    chords {
                        name,
                        path,
                        rootNote,
                        inversion
                    },
                }   
            }
        }
      }
    }
  }
`