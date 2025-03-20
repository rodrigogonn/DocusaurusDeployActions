import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import { ReactNode } from 'react';

type FeatureItem = {
  title: string;
  description: ReactNode;
  link: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Engenharia',
    description: (
      <>
        Documentação completa dos projetos de engenharia, incluindo arquitetura,
        padrões de código, APIs e guias de desenvolvimento.
      </>
    ),
    link: '/docs/engenharia',
  },
  {
    title: 'Data',
    description: (
      <>
        Documentação dos projetos de dados, incluindo pipelines, modelos,
        análises e ferramentas de processamento de dados.
      </>
    ),
    link: '/docs/data',
  },
];

function Feature({ title, description, link }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md padding-vert--lg">
        <Heading as="h3">
          <a href={link} className={styles.featureLink}>
            {title}
          </a>
        </Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div
          className="row row--justify-around"
          style={{ justifyContent: 'space-around' }}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
