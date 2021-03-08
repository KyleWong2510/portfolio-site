import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import SEO from "../components/Seo"

const Projects = ({ data }) => {
  return <StaticQuery 
    query={
      graphql`
        {
          allContentfulProject {
            nodes {
              title
              briefDesc
              slug
              id
            }
          }
        }
      `
    }
    render={data => (
      <section id='projects'>
        <SEO title="Projects" />
        <section className='project-previews'>
          { data.allContentfulProject.nodes.map((project, i )=> (
            <div className='project-preview' key={i}>
              <Link to={`/projects/${project.slug}`} >
                <h4>{project.title}</h4>
                <p>{project.briefDesc}</p>
              </Link>
            </div>
          ))}
        </section>
      </section>
    )}
  />

  // const { allContentfulProject: { nodes: projects }} = data 

  // const allProjects = projects.map((project, i )=> (
  //   <div className='project-preview' key={i}>
  //     <Link to={`/projects/${project.slug}`} >
  //       <h4>{project.title}</h4>
  //       <p>{project.briefDesc}</p>
  //     </Link>
  //   </div>
  // ))

  // return (
  //   <Layout>
  //     <SEO title="Projects" />
  //       <section className='project-previews'>
  //         { allProjects }
  //       </section>
  //   </Layout>
  // )
}

// export const query = graphql`
//   {
//     allContentfulProject {
//       nodes {
//         title
//         briefDesc
//         slug
//         id
//       }
//     }
//   }
// `

export default Projects
