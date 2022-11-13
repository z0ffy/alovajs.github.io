import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: '多框架支持',
    Svg: require('@site/static/img/1.svg').default,
    description: (
      <>
        alova通过states hook的设计将框架依赖分离，一套代码同时支持React/React Native/Vue/Svelte，或更多...
      </>
    ),
  },
  {
    title: '实时自动管理状态',
    Svg: require('@site/static/img/2.svg').default,
    description: (
      <>
        应用的一切请求数据和状态都将由alova管理，您只需直接使用即可
      </>
    ),
  },
  {
    title: '简单且熟悉',
    Svg: require('@site/static/img/3.svg').default,
    description: (
      <>
        与axios相似的api设计，让您上手更简单熟悉
      </>
    ),
  },
  {
    title: '轻量级',
    Svg: require('@site/static/img/4.svg').default,
    description: (
      <>
        4kb，只有axios的40%
      </>
    ),
  },
  {
    title: '简化请求逻辑',
    Svg: require('@site/static/img/5.svg').default,
    description: (
      <>
        声明式请求实现，无需您编写请求数据和状态，以及特定场景下的请求代码
      </>
    ),
  },
  {
    title: '与任意请求库协作',
    Svg: require('@site/static/img/6.svg').default,
    description: (
      <>
        不管您喜欢使用axios、superagent，还是浏览器的fetch-api，alova都可以不失特性地完美兼容
      </>
    ),
  },
  {
    title: '多策略缓存服务端数据',
    Svg: require('@site/static/img/7.svg').default,
    description: (
      <>
        提供内存模式、持久化模式等多种服务端数据缓存策略，提升用户体验，同时降低服务端压力
      </>
    ),
  },
  {
    title: '更安全的乐观更新',
    Svg: require('@site/static/img/8.svg').default,
    description: (
      <>
        alova实现了后台轮询机制，即使重新进入仍有效，直到请求成功，并配合独有的延迟数据更新机制，保证了乐观更新的安全性
      </>
    ),
  },
  {
    title: '数据预拉取',
    Svg: require('@site/static/img/9.svg').default,
    description: (
      <>
        在任何情况下自定义提前拉取接口数据，这意味着用户可以更快看到信息，无需等待
      </>
    ),
  },
  {
    title: 'Typescript支持',
    Svg: require('@site/static/img/10.svg').default,
    description: (
      <>
        如果您喜欢使用typescript，alova的一切都将是类型化的
      </>
    ),
  },
  {
    title: '离线提交',
    Svg: require('@site/static/img/11.svg').default,
    description: (
      <>
        独有的请求缓存，即使在离线下也让请求具有可用性，而不打断正在使用的用户
      </>
    ),
  },
  {
    title: 'Tree shaking支持',
    Svg: require('@site/static/img/12.svg').default,
    description: (
      <>
        alova未使用到的api将不会打包进生产包，这意味着alova的生产体积往往小于4kb
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
