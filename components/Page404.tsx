import Image from 'next/image'
import Link from 'next/link'

import type * as types from '@/lib/types'

import notFoundImage from '../public/404.png'
import { PageHead } from './PageHead'
import styles from './styles.module.css'

export function Page404({ site, pageId, error }: types.PageProps) {
  const title = site?.name || 'Page Not Found'

  return (
    <>
      <PageHead site={site} title={title} />

      <div className={styles.container}>
        <main className={styles.main} style={{ color: 'white' }}>
          <h1>Page Not Found</h1>

          {error ? (
            <p style={{ margin: 0 }}>{error.message}</p>
          ) : (
            pageId && <p>Whoops, page not found.</p>
          )}

          <p>
            You can go back to the <Link href='/'>homepage here</Link>.
          </p>

          <Image
            src={notFoundImage}
            alt='404 Not Found'
            className={styles.errorImage}
            style={{ maxHeight: '20rem', objectFit: 'contain' }}
          />
        </main>
      </div>
    </>
  )
}
