import React from 'react'

const Projects = () => {
    const projects = [
        {
            name: 'Web-Ide',
            link: 'https://ide.samirn.com.np',
            description: 'Web Application'
        },
        {
            name: 'Note Sharing Platform',
            link: 'https://bhaskarrijal.me/tools/byte-converter',
            description: 'Web Application'
        },
        {
            name: 'Quote Generator',
            link: 'https://smrn001.github.io/randomQuote/',
            description: 'Web Application'
        },
        {   
            name: 'Donot Animation',
            link: 'https://donut.samirn.com.np/',
            description: 'Web Application'
        }
       
    ]
    return (
        <>
            <div className="flex flex-col gap-4">
                <h2 className="font-medium text-2xl">Projects</h2>
                <ul className="ist-inside">
                    {
                        projects.map((project, index) => (
                            <li key={index}>
                                <a href={project.link} target='_blank' className='text-primary underline italic'>
                                    <span>{project.name}</span>
                                </a> | <span>{project.description}</span>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </>
    )
}

export default Projects