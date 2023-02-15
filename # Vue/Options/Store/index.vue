<script>
// import { mapState, mapGetters, mapMutations, mapActions  } from "vuex";
import { createNamespacedHelpers } from "vuex";
const { mapState, mapGetters, mapMutations, mapActions } = createNamespacedHelpers("home");
export default {
  computed: {
    ...mapState(["xxx"]),
    ...mapState({
      xxx: (state) => state.xxx,
      xxxx: "xxx",
      xxx(state) {
        return state.xxx + this.xxx;
      },
    }),
    ...mapGetters(["xxx"]),
    ...mapGetters({
      xxxx: "xxx",
    }),
  },
  methods: {
    ...mapMutations(["xxx"]),
    ...mapMutations({
      xxxx: "xxx",
    }),
    ...mapActions(["xxx"]),
    ...mapActions({
      xxxx: "xxx",
    }),
  },
};
</script>
