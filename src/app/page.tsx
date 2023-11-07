'use client';
import { useMemo, useState } from 'react';
import { Masonry } from '../components/masonry';

export default function Page() {
  const [list, setList] = useState([
    {
      title:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, asperiores?',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, voluptate eaque corrupti maxime optio enim aperiam explicabo dolore fuga sunt a, maiores voluptatem, exercitationem itaque illo dolor. Atque obcaecati, commodi sequi exercitationem nobis ducimus magnam. Neque eius quis, facilis vitae labore repudiandae consequuntur voluptatibus corporis consequatur aliquam quo ratione, eaque iste repellat pariatur quam consectetur fugit, in deleniti itaque quas quod maiores? Dolorem minus architecto a cumque dolores corporis, doloremque, enim totam, aliquid debitis repellendus consequuntur sequi. Dolorum tempore vel repudiandae necessitatibus iusto quo reiciendis, dolor, qui eos error ea, neque odio nisi blanditiis totam id quibusdam atque! Quasi, voluptatibus.',
    },
    {
      title: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, voluptate eaque corrupti maxime optio enim aperiam explicabo dolore fuga sunt a, maiores voluptatem, exercitationem itaque illo dolor. Atque obcaecati, commodi sequi exercitationem nobis ducimus magnam. Neque eius quis, facilis vitae labore repudiandae consequuntur volupt',
    },
    {
      title: 'Lorem ipsum dolor sit amet consectetur, ad',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, voluptate eaque corrupti maxime optio enim aperiam explicabo dolore fuga sunt a, maiores voluptatem, exercitationem itaque illo dolor. Atque obcaecati, commodi sequi exercitationem nobis ducimus magnam. Neque eius quis, facilis vitae labore repudiandae consequuntur voluptatibus corporis consequatur aliquam quo ratione, eaque iste repellat pariatur quam consectetur fugit, in deleniti itaque quas quod maiores? Dolorem minus architecto a cumque dolores corporis, doloremque, enim totam, aliquid debitis repellendus consequuntur sequi. Dolorum tempore vel repudiandae necessit',
      class: 'featured',
    },
    {
      title:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, asperiores?',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, voluptate eaque corrupti maxime optio enim aperiam explicabo dolore fuga sunt a, maiores voluptatem, exercitationem itaque illo dolor. Atque obcaecati, commodi sequi exercitationem nobis ducimus magnam. Neque eius quis, facilis vitae labore repudiandae consequuntur voluptatibus corporis consequatur aliquam quo ratione, eaque iste repellat pariatur quam consectetur fugit, in deleniti itaque quas quod maiores? Dolorem minus architecto a cumque dolores corporis, doloremque, enim totam, aliquid debitis repellendus consequuntur sequi. Dolorum tempore vel repudiandae necessitatibus iusto quo reiciendis, dolor, qui eos error ea, neque odio nisi blanditiis totam id quibusdam atque! Quasi, voluptatibus.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, asperiores? Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, voluptate eaque corrupti maxime optio enim aperiam explicabo dolore fuga sunt a, maiores voluptatem, exercitationem itaque illo dolor. Atque obcaecati, commodi sequi exercitationem nobis ducimus magnam. Neque eius quis, facilis vitae labore repudiandae consequuntur voluptatibus corporis consequatur aliquam quo ratione, eaque iste repellat pariatur quam consectetur fugit, in deleniti itaque quas quod maiores? Dolorem minus architecto a cumque dolores corporis, doloremque, enim totam, aliquid debitis repellendus consequuntur sequi. Dolorum tempore vel repudiandae necessitatibus iusto quo reiciendis, dolor, qui eos error ea, neque odio nisi blanditiis totam id quibusdam atque! Quasi, voluptatibus.',
    },
    {
      title:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, asperiores?',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, voluptate eaque corrupti maxime optio enim aperiam explicabo dolore fuga sunt a, maiores voluptatem, exercitationem ',
    },
    {
      title:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta ipsa sunt iste cupiditate expedita iusto modi, corporis eaque quod, eius accusantium voluptate sequi neque fugiat? Eius accusamus ipsa esse quod.',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, voluptate eaque corrupti maxime optio enim aperiam explicabo dolore fuga sunt a, maiores voluptatem, exercitationem itaque illo dolor. Atque obcaecati, commodi sequi exercitationem nobis ducimus magnam. Neque eius quis, facilis vitae labore repudiandae consequuntur voluptatibus corporis consequatur aliquam quo ratione, eaque iste repellat pariatur quam consectetur fugit, in deleniti itaque quas quod maiores? Dolorem minus architecto a cumque dolores corporis',
      class: 'featured',
    },
    {
      title: 'Lorem ipsum dolor sit amet consectetur, adipisicing el',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, voluptate eaque corrupti maxime optio enim aperiam explicabo dolore fuga sunt a, maiores voluptatem, exercitationem itaque illo dolor. Atque obcaecati, commodi sequi exercitationem nobis ducimus magnam. Neque eius quis, facilis vitae labore repudiandae consequuntur voluptatibus corporis consequatur aliquam quo ratione, eaque iste repellat pariatur quam consectetur fugit, in deleniti itaque quas quod maiores? Dolorem minus architecto a cumque dolores corporis, doloremque, enim totam, aliquid debitis repellendus consequuntur sequi. Dolorum tempore vel repudiandae necessitatibus iusto quo reiciendis, dolor, qui eos error ea, neque odio nisi blanditiis totam id quibusdam atque! Quasi, voluptatibus.lorem minus architecto a cumque dolores corporis, doloremque, enim totam, aliquid debitis repellendus consequuntur sequi. Dolorum tempore vel repudiandae necessitatibus iusto quo reiciendis, dolor, qui eos error ea, neque odio nisi blanditiis totam id quibusdam atque! Quasi, voluptatibus.',
    },
    {
      title: 'Lorem ipsum dolor sit amet.',
      content: 'Lorem ipsum dolor sit amet conse',
    },
    {
      title: 'Lorem ipsum dolor sit amet consectetur, ',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, voluptate eaque corrupti maxime optio enim aperiam explicabo dolore fuga sunt a, maiores voluptatem, exercitationem itaque illo dolor. Atque obcaecati, commodi sequi exercitationem nobis ducimus magnam. Neque eius quis, facilis vitae labore repudiandae consequuntur voluptatibus corporis consequatur aliquam quo ratione, eaque iste repellat pariatur quam consectetur fugit, in deleniti itaque quas quod maiores? Dolorem ',
    },
    {
      title:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque dolore facere odit?',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, voluptate eaque corrupti maxime optio enim aperiam explicabo dolore fuga sunt a, maiores voluptatem, exercitationem itaque illo dolor. Atque obcaecati, commodi sequi exercitationem nobis ducimus magnam. Neque eius quis, facilis vitae labore repudiandae consequuntur voluptatibus corporis consequatur aliquam quo ratione, eaque iste repellat ',
    },
  ]);

  const options = useMemo(
    () => ({
      columns: 5,
      margin: 20,
      breakAt: {
        1535: 4,
        1023: 3,
        767: 2,
        639: 1,
      },
    }),
    []
  );

  return (
    <Masonry options={options}>
      {list?.map((item, index) => (
        <div
          className={`card ${item?.class ?? ''}`}
          key={index}>
          <div className="card-title">
            <span className="count">{++index}</span> {item?.title?.slice(0, 50)}
          </div>
          <div className="card-body">{item?.content}</div>
        </div>
      ))}
    </Masonry>
  );
}
