import MobiledocRenderer_0_2, { MOBILEDOC_VERSION as MOBILEDOC_VERSION_0_2, MobiledocV0_2 } from './0-2'
import MobiledocRenderer_0_3, { MOBILEDOC_VERSION as MOBILEDOC_VERSION_0_3, MobiledocV0_3 } from './0-3'
import MobiledocRenderer_0_3_1, { MOBILEDOC_VERSION as MOBILEDOC_VERSION_0_3_1, MobiledocV0_3_1 } from './0-3-1'
import MobiledocRenderer_0_3_2, { MOBILEDOC_VERSION as MOBILEDOC_VERSION_0_3_2, MobiledocV0_3_2 } from './0-3-2'
import assert from '../../utils/assert'
import Post from '../../models/post'

export const MOBILEDOC_VERSION = MOBILEDOC_VERSION_0_3_2

interface VersionTypes {
  [MOBILEDOC_VERSION_0_2]: MobiledocV0_2
  [MOBILEDOC_VERSION_0_3]: MobiledocV0_3
  [MOBILEDOC_VERSION_0_3_1]: MobiledocV0_3_1
  [MOBILEDOC_VERSION_0_3_2]: MobiledocV0_3_2
}

type MobiledocVersion = keyof VersionTypes

export default {
  render<T extends MobiledocVersion = typeof MOBILEDOC_VERSION_0_3_2>(post: Post, version?: T): VersionTypes[T] {
    switch (version) {
      case MOBILEDOC_VERSION_0_2:
        return MobiledocRenderer_0_2.render(post) as VersionTypes[T]
      case MOBILEDOC_VERSION_0_3:
        return MobiledocRenderer_0_3.render(post) as VersionTypes[T]
      case MOBILEDOC_VERSION_0_3_1:
        return MobiledocRenderer_0_3_1.render(post) as VersionTypes[T]
      case undefined:
      case null:
      case MOBILEDOC_VERSION_0_3_2:
        return MobiledocRenderer_0_3_2.render(post) as VersionTypes[T]
      default:
        assert(`Unknown version of mobiledoc renderer requested: ${version}`, false)
    }
  },
}
